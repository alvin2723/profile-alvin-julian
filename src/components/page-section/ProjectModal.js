import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import PropTypes from "prop-types";

const ProjectModal = ({ project, handleClose, open, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        // initialFocus={cancelButtonRef}
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-lg md:max-w-xl w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <img
                      src={project.image}
                      alt=""
                      className="w-100 rounded-lg drop-shadow-md pb-5"
                    />
                    <Dialog.Title as="h5" className="font-bold">
                      {project.title}
                    </Dialog.Title>
                    <div className="mt-2 pb-2">
                      <p>
                        <span className="text-gray-500">
                          Job Responsibility :
                        </span>{" "}
                        {project.job}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row md:justify-end">
                <a
                  href={project.url}
                  target="_blank"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 outline-none hover:ring-2 hover:ring-offset-2 hover:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm md:mr-2"
                >
                  Visit Site
                </a>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 outline-none hover:ring-2 hover:ring-offset-2 hover:ring-red-500 sm:ml-3 sm:w-auto mt-3 sm:mt-0 sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

// ProjectModal.propTypes = {
//   project: PropTypes.shape({
//     image: PropTypes.string,
//     title: PropTypes.string,
//     desc: PropTypes.string,
//     url: PropTypes.string,
//     tech: PropTypes.arrayOf(PropTypes.string),
//   }),
// };

export default ProjectModal;
