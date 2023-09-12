import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import {
     Table,
     Thead,
     Tbody,
     Tfoot,
     Tr,
     Th,
     Td,
     TableCaption,
     TableContainer,
} from "@chakra-ui/react";
const ResultPage = () => {
     // let channelId = localStorage.getItem("channelId");
     // let subscriberCount = localStorage.getItem("subscriberCount");
     let views = localStorage.getItem("views");
     let likes = localStorage.getItem("likes");
     let comments = localStorage.getItem("comments");
     let earnings = localStorage.getItem("earnings");
     return (
          <Box color="white" margin={"auto"} height={"92.2vh"}>
               <Box
                    width={"75%"}
                    height={"40vh"}
                    margin={"50px auto"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    bg={"rgb(30, 30, 30)"}
               >
                    <Box
                         height={"35vh"}
                         margin={"auto"}
                         display={"flex"}
                         flexDirection={"column"}
                         alignItems={"flex-start"}
                         justifyContent={"space-around"}
                    >
                         <Button
                              borderRadius={"none"}
                              height={"40px"}
                              color={"white"}
                              bg={"#707070"}
                         >
                              🎩 Top earner video
                         </Button>
                         <Image
                              w={"250px"}
                              height={"130px"}
                              borderRadius={"10px"}
                              src="./video.jpg"
                         />
                         <Text> Uploaded on - June 23, 2023</Text>
                    </Box>
                    <Box
                         height={"35vh"}
                         width={"33%"}
                         margin={"auto"}
                         display={"flex"}
                         flexDirection={"column"}
                         alignItems={"flex-start"}
                         justifyContent={"space-around"}
                    >
                         <Heading fontSize={"25px"}>
                              How become a prow UI/UX designer
                         </Heading>
                         <Text>Views 👁 {views}</Text>
                         <Text>Likes 👍 {likes}</Text>
                         <Text>Comments 📧 {comments}</Text>
                    </Box>
                    <Box
                         height={"35vh"}
                         margin={"auto"}
                         width={"23%"}
                         display={"flex"}
                         flexDirection={"column"}
                         alignItems={"center"}
                         justifyContent={"center"}
                         bg={"#282828"}
                         gap={5}
                         borderRadius={"10px"}
                    >
                         <Heading>₹ {earnings}</Heading>
                         <Button bg={"white"}>Check How?</Button>
                    </Box>
               </Box>
               <Heading fontSize={"25px"} textAlign={"center"}>
                    Other Videos Potentials
               </Heading>
               <Box width={"75%"} margin={"50px auto"} bg={"rgb(30, 30, 30)"}>
                    <TableContainer w="95%" m={"auto"}>
                         <Table variant="simple">
                              <Thead>
                                   <Tr>
                                        <Th>Rank</Th>
                                        <Th>Title</Th>
                                        <Th>Thumbnail</Th>
                                        <Th>Views</Th>
                                        <Th>Likes</Th>
                                        <Th>Comment</Th>
                                        <Th>Uploaded on</Th>
                                        <Th>*Estimated Earning</Th>
                                   </Tr>
                              </Thead>
                              <Tbody>
                                   <Tr>
                                        <Td>2</Td>
                                        <Td>Video Title Name</Td>
                                        <Td>
                                             <Image
                                                  height={"60px"}
                                                  width={"150px"}
                                                  src="./video.jpg"
                                             />
                                        </Td>
                                        <Td>123748</Td>
                                        <Td>12340</Td>
                                        <Td>1342</Td>
                                        <Td>June 23, 2023</Td>
                                        <Td>239893</Td>
                                   </Tr>
                                   <Tr>
                                        <Td>2</Td>
                                        <Td>Video Title Name</Td>
                                        <Td>
                                             <Image
                                                  height={"60px"}
                                                  width={"150px"}
                                                  src="./video.jpg"
                                             />
                                        </Td>
                                        <Td>123748</Td>
                                        <Td>12340</Td>
                                        <Td>1342</Td>
                                        <Td>June 23, 2023</Td>
                                        <Td>239893</Td>
                                   </Tr>
                              </Tbody>
                              <Tfoot></Tfoot>
                         </Table>
                    </TableContainer>
               </Box>
          </Box>
     );
};
export default ResultPage;
