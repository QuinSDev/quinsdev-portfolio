import React, { useContext, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { ProjectContext } from "../provider/ProjectProvider";

export const DetailsProject = ({ openModal, setOpenModal }) => {
  const { selectedProject } = useContext(ProjectContext);
  const [modalSize, setModalSize] = useState("7x1");
  const [videoKey, setVideoKey] = useState(0);

  const handleShow = () => {
    setVideoKey((prevKey) => prevKey + 1); // Agrega esta línea
  };

  return (
    <>
      {/* <Modal
        show={openModal}
        size={modalSize}
        onClose={() => setOpenModal(false)}
        className="p-0 flex justify-start"
      >
        <Modal.Header>{selectedProject && selectedProject.tittle}</Modal.Header>
        <Modal.Body>
          
          <video key={videoKey} className="w-80" controls autoPlay> // Modifica esta línea
              <source src={selectedProject && selectedProject.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{selectedProject.description}</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal> */}
      {openModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen xl:block p-6 xl:p-8">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle xl:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between border-b-2 pb-3">
                  <h1 className="text-2xl md:text-3xl leading-6  font-semibold text-gray-900">
                    {selectedProject.tittle}
                  </h1>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="inline-flex justify-center rounded-md border border-transparent hover:shadow-sm hover:bg-gray-100  text-base font-medium text-whit focus:outline-none sm:w-auto sm:text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col-reverse xl:flex-row my-2 justify-between">
                  <video
                    key={videoKey}
                    className="w-full  xl:w-6/12 xl:m-3 my-3 lg:mt-5"
                    controls
                    autoPlay
                  >
                    <source
                      src={selectedProject && selectedProject.video}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  <div className="mx-1 border-l-2"></div>
                  <p className="xl:m-3 xl:mt-5 text-sm sm:text-base lg:text-lg xl:text-base text-gray-500">
                    {selectedProject.description}
                  </p>
                </div>
                <div className="flex justify-between w-full border-t-2 pt-3">
                  <div className="flex">{selectedProject.tecnology}</div>
                  <button
                    onClick={() => window.open(selectedProject.url, "_blank")}
                    className="w-6 sm:w-7 md:w-9 rounded-full hover:shadow-sm hover:bg-gray-200  text-base font-medium text-whit focus:outline-none sm:text-sm"
                  >
                    <img width="100%" height="100%" src="https://img.icons8.com/material-sharp/36/domain.png" alt="domain"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
