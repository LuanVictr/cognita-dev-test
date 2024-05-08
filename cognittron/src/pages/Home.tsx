import { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { IoMdAdd } from "react-icons/io";
import IStep from "../interfaces/IStep";
import StepCard from "../components/StepCard";
import Modal from "../components/CreateStepModal";

function Home() {
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    { title: "Passso 1", content: "conteudo passo 1" },
    { title: "Passo 2", content: "conteudo passo 2" },
    {title: 'Passo 3', content: 'conteudo passo 3'},
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`${
        isMobile ? "p-3" : "px-60 py-20"
      } px- bg-primary-background h-screen w-screen flex flex-col gap-10`}
    >
      <Modal isModalOpen={isModalOpen} onClose={closeModal} />
      <div
        className={`flex ${
          isMobile ? "flex-col gap-2" : "flex-row"
        } justify-between items-center`}
      >
        <h1 className="text-3xl font-bold">Titulo da trilha</h1>
        <button
          className="text-white bg-primary-color p-3 rounded-lg flex items-center justify-center font-bold"
          onClick={openModal}
        >
          <IoMdAdd className="mr-2" /> Adicionar passo
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {steps.map((step: IStep) => (
          <StepCard title={step.title} content={step.content} />
        ))}
      </div>
    </div>
  );
}

export default Home;
