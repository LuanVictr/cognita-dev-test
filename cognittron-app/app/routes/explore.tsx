import { useEffect, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { IoMdAdd } from "react-icons/io";
import StepCard from "../components/StepCard";
import Modal from "../components/CreateStepModal";
// eslint-disable-next-line import/no-unresolved
import { getDriver } from "~/database/driver";
import {
  json,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { ActionFunctionArgs, redirect } from "@remix-run/node";

export async function loader() {
  const driver = await getDriver();
  const trailInfo = await driver.executeQuery(
    "MATCH (t:Trail)-[:HAS_STEP]->(:Step) RETURN DISTINCT t.title"
  );

  const stepInfo = await driver.executeQuery(
    "MATCH (:Trail)-[:HAS_STEP]->(s:Step) RETURN s"
  );

  const dataInfo = {
    trailName: trailInfo.records.map((record) => record.get("t.title")),
    steps: stepInfo.records.map((record) => {
      const step = record.get("s");

      return {
        id: step.properties.id,
        title: step.properties.title,
        content: step.properties.content,
      };
    }),
  };

  return json(dataInfo);
}

export async function action({ request }: ActionFunctionArgs) {
  const driver = await getDriver();
  const form = await request.formData();
  const formData = {
    id: String(form.get("id")),
    title: String(form.get("title")),
    content: String(form.get("content")),
  };

  if (!formData.id || formData.id.length < 2) {
    return { id: "Id deve possuir mais de 2 caracteres" };
  }

  if (!formData.title || formData.title.length < 5) {
    return { title: "Título deve possuir mais de 5 caracteres" };
  }

  if (!formData.content || formData.content.length < 5) {
    return { content: "Conteúdo deve possuir mais de 5 caracteres" };
  }

  await driver.executeQuery(`
  MATCH (t:Trail)
  CREATE (s:Step 
    { id: '${form.get("id")}',
      title: '${form.get("title")}',
      content: '${form.get("content")}'
  })
  CREATE (t)-[:HAS_STEP]->(s)
`);
  return redirect("/explore");
}

function Explore() {
  const navigation = useNavigation();
  const error = useActionData<typeof action>();
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = useLoaderData<typeof loader>();
  const [isMobileVersion, setIsMobileVersion] = useState(false);

  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    setIsMobileVersion(isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (!error) {
      setIsModalOpen(false);
    }
  }, [error]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`${
        isMobileVersion ? "p-5 justify-center" : "px-60 py-20"
      } bg-primary-background min-h-screen w-screen flex flex-col gap-10`}
    >
      <Modal
        error={error}
        isSubmitting={isSubmitting}
        isModalOpen={isModalOpen}
        onClose={closeModal}
      />
      <div
        className={`flex ${
          isMobileVersion ? "flex-col gap-2" : "flex-row"
        } justify-between items-center`}
      >
        <h1 className="text-3xl font-bold">{data.trailName}</h1>
        <button
          className="text-white bg-primary-color p-3 rounded-lg flex items-center justify-center font-bold"
          onClick={openModal}
        >
          <IoMdAdd className="mr-2" /> Adicionar passo
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {data.steps.map((step, index: number) => (
          <StepCard key={index} title={step.title} content={step.content} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
