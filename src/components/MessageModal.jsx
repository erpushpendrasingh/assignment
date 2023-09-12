// // import React from "react";
// // import {
// //      Button,
// //      Modal,
// //      ModalOverlay,
// //      ModalContent,
// //      ModalHeader,
// //      ModalCloseButton,
// //      ModalBody,
// //      ModalFooter,
// //      Input,
// // } from "@chakra-ui/react";

// // const MessageModal = ({ isOpen, onClose, message }) => {
// //      return (
// //           <Modal isOpen={isOpen} onClose={onClose} size="sm">
// //                <ModalOverlay />
// //                <ModalContent
// //                     boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
// //                     bg="#cccccc"
// //                     color={"black"}
// //                >
// //                     <ModalHeader>Message</ModalHeader>
// //                     <ModalCloseButton />
// //                     <ModalBody
// //                          display={"flex"}
// //                          flexDirection={"column"}
// //                          alignItems={"center"}
// //                          justifyContent={"center"}
// //                          gap={"5px"}
// //                     >
// //                          <Input color={"black"} placeholder="Name" />
// //                          <Input placeholder="Mobile" />
// //                          <Button m="auto" colorScheme="blue" onClick={onClose}>
// //                               Request a callback
// //                          </Button>
// //                     </ModalBody>
// //                     {/* <ModalFooter>

// //                     </ModalFooter> */}
// //                </ModalContent>
// //           </Modal>
// //      );
// // };

import React, { useState } from "react";
import {
     Button,
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalCloseButton,
     ModalBody,
     ModalFooter,
     Input,
     Text,
} from "@chakra-ui/react";

const MessageModal = ({ isOpen, onClose }) => {
     const [name, setName] = useState("");
     const [mobile, setMobile] = useState("");
     const [requestSent, setRequestSent] = useState(false);

     const sendCallRequest = () => {
          // Here, you can implement the logic to send the call request email.
          // For simplicity, we'll just set a flag to simulate success.
          // Replace this with your actual email sending logic.
          setTimeout(() => {
               setRequestSent(true);
          }, 2000); // Simulate a delay before success.

          // You can also clear the input fields here if needed.
     };

     const resetModal = () => {
          setName("");
          setMobile("");
          setRequestSent(false);
          onClose();
     };

     return (
          <Modal isOpen={isOpen} onClose={resetModal} size="md">
               <ModalOverlay />
               <ModalContent
                    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    bg="#cccccc"
                    color={"black"}
               >
                    <ModalHeader>Call Request</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                         {requestSent ? (
                              <Text fontSize="lg" fontWeight="bold">
                                   Request sent successfully!
                              </Text>
                         ) : (
                              <>
                                   <Input
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) =>
                                             setName(e.target.value)
                                        }
                                        mb={4}
                                   />
                                   <Input
                                        placeholder="Mobile"
                                        value={mobile}
                                        onChange={(e) =>
                                             setMobile(e.target.value)
                                        }
                                        mb={4}
                                   />
                              </>
                         )}
                    </ModalBody>
                    <ModalFooter>
                         {requestSent ? (
                              <Button colorScheme="blue" onClick={resetModal}>
                                   Close
                              </Button>
                         ) : (
                              <>
                                   <Button
                                        colorScheme="blue"
                                        mr={3}
                                        onClick={sendCallRequest}
                                   >
                                        Send Request
                                   </Button>
                              </>
                         )}
                    </ModalFooter>
               </ModalContent>
          </Modal>
     );
};

export default MessageModal;
