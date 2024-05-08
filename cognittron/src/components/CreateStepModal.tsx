import useIsMobile from "../hooks/useIsMobile";

function Modal({
  isModalOpen,
  onClose,
}: {
  isModalOpen: boolean;
  onClose: () => void;
}) {

  const isMobile = useIsMobile();

  if (isModalOpen !== true) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className={`border border-white h-4/5 ${ isMobile ? ' w-5/6 p-8' : 'w-2/4 p-12' } bg-white rounded-3xl flex flex-col gap-10`} >
        <div className=" flex flex-row items-center">
          <h5 className={`${ isMobile ? 'text-2xl' : 'text-3xl'} font-bold`}>Adicionar passo</h5>
        </div>
        <div>
          <form className="flex flex-col gap-4">
            <label htmlFor="id" className="text-gray-600 font-bold">
              id
            </label>
            <input
              type="text"
              id="id"
              className="bg-primary-background rounded-md p-2"
            />

            <label htmlFor="titulo" className="text-gray-600 font-bold">
              Título
            </label>
            <input
              type="text"
              id="titulo"
              className="bg-primary-background rounded-md p-2"
            />

            <label htmlFor="conteudo" className="text-gray-600 font-bold text-sm">
              Conteúdo
            </label>
            <textarea
              id="conteudo"
              className="bg-primary-background rounded-md p-2"
            ></textarea>
          </form>
        </div>
        <div className={`flex flex-row gap-6 items-center ${isMobile ? 'justify-center' : 'justify-end'}`}>
          <button onClick={onClose} className={`text-primary-color bg-white border border-primary-color ${isMobile ? 'py-3 px-5' : 'py-3 px-7'} rounded-lg flex items-center justify-center font-bold`}>
            Cancelar
          </button>
          <button className={` text-white bg-primary-color ${isMobile ? 'py-3 px-7' : 'py-3 px-7'} rounded-lg flex items-center justify-center font-bold text-nowrap`}>
            Criar passo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
