import { Form } from "@remix-run/react";
import useIsMobile from "../hooks/useIsMobile";

function Modal({
  isModalOpen,
  onClose,
  isSubmitting,
  error
}: {
  isModalOpen: boolean;
  onClose: () => void;
  isSubmitting: boolean;
  error?: {id?: string, title?:string, content?:string} 
}) {
  const isMobile = useIsMobile();

  if (isModalOpen !== true) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className={`border border-white ${
          isMobile ? " w-5/6 p-8" : "w-2/4 p-12 "
        } bg-white rounded-3xl flex flex-col gap-10`}
      >
        <div className=" flex flex-row items-center">
          <h5 className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold`}>
            Adicionar passo
          </h5>
        </div>
        <div>
          <Form method="post" className="flex flex-col gap-4">
            <label htmlFor="id" className="text-gray-600 font-bold">
              id
            </label>
            <input
              type="text"
              id="id"
              name="id"
              className="bg-primary-background rounded-md p-2"
            />
            {error?.id && <em className=" text-red-600">{error.id}</em>}

            <label htmlFor="title" className="text-gray-600 font-bold">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-primary-background rounded-md p-2"
            />
            {error?.title && <em className=" text-red-600">{error.title}</em>}

            <label
              htmlFor="content"
              className="text-gray-600 font-bold text-sm"
            >
              Conteúdo
            </label>
            <textarea
              id="content"
              name="content"
              className="bg-primary-background rounded-md p-2"
            />
            {error?.content && <em className=" text-red-600">{error.content}</em>}
            <div
              className={`flex flex-row gap-6 mt-6 items-center ${
                isMobile ? "justify-center" : "justify-end"
              }`}
            >
              <button
                type="button"
                onClick={onClose}
                className={`text-primary-color bg-white border border-primary-color ${
                  isMobile ? "py-3 px-5" : "py-3 px-7"
                } rounded-lg flex items-center justify-center font-bold`}
              >
                Cancelar
              </button>
              <button
                disabled={isSubmitting}
                className={` text-white bg-primary-color ${
                  isMobile ? "py-3 px-7" : "py-3 px-7"
                } rounded-lg flex items-center justify-center font-bold text-nowrap`}
              >
                Criar passo
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
