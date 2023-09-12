import { Box, Button, CSSReset, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import MessageModal from "./MessageModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
     const navigate = useNavigate();
     const [isOpen, setIsOpen] = useState(false);
     const [message, setMessage] = useState("");

     const openModal = (message) => {
          setMessage(message);
          setIsOpen(true);
     };

     const closeModal = () => {
          setMessage("");
          setIsOpen(false);
     };
     const handleClick = () => {
          navigate("/");
     };
     return (
          <Box
               bg={"black"}
               p={2}
               display={"flex"}
               alignItems={"center"}
               justifyContent={"space-around"}
          >
               <Box
                    onClick={handleClick}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"6px"}
               >
                    <Image src={"./img2.png"} alt="img3" />
                    <Image src={"./anchors.png"} alt="img1" />
                    <Image bg="white" src={"./beta.png"} alt="img2" />
               </Box>
               <CSSReset />
               <div className="App">
                    <Button
                         onClick={() => openModal("This is a Chakra UI modal!")}
                         color={"white"}
                         variant="outline"
                    >
                         📞 Request a call back
                    </Button>
                    <MessageModal
                         isOpen={isOpen}
                         onClose={closeModal}
                         message={message}
                    />
               </div>
          </Box>
     );
};

export default Navbar;
