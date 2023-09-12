import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
     const navigate = useNavigate();
     const [channelId, setChannelId] = useState(null);
     const [subscriberCount, setSubscriberCount] = useState(null);
     const [views, setViews] = useState(null);
     const [comments, setComments] = useState(null);
     const [likes, setLikes] = useState(null);
     const [earnings, setEarnings] = useState(null);
     const [videoUrl, setVideoUrl] = useState("");

     const handleSearch = async () => {
          let newQuery = videoUrl?.split("v=")[1];
          try {
               if (newQuery && newQuery?.length) {
                    const response = await axios.get(
                         `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&id=${newQuery}&key=AIzaSyAJQ3-DwehM_OIEivp8yFe1ka2Ft8ItBW0`
                    );
                    const response2 = await axios.get(
                         `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCdpbcF1qaSP8MOcM06_LsZQ&key=AIzaSyAJQ3-DwehM_OIEivp8yFe1ka2Ft8ItBW0`
                    );
                    setSubscriberCount(
                         response2?.data?.items[0]?.statistics?.subscriberCount
                    );
                    setChannelId(response?.data?.items[0]?.snippet?.channelId);
                    setComments(
                         response?.data?.items[0]?.statistics?.commentCount
                    );
                    setViews(response?.data?.items[0]?.statistics?.viewCount);
                    setLikes(response?.data?.items[0]?.statistics?.likeCount);
               } else {
                    console.error("Invalid video URL or video ID not found");
               }
          } catch (error) {
               console.error("Error fetching data from YouTube API:", error);
          }
     };

     React.useEffect(() => {
          if (subscriberCount && views && comments && likes) {
               let totalEarning =
                    Math.min(subscriberCount, views) +
                    10 * comments +
                    5 * likes;
               // console.log("totalEarning", totalEarning);

               setEarnings(totalEarning);
          }
     }, [likes, views, subscriberCount, comments]);

     React.useEffect(() => {
          if (subscriberCount && views && comments && likes && earnings) {
               localStorage.setItem("channelId", channelId);
               localStorage.setItem("subscriberCount", subscriberCount);
               localStorage.setItem("views", views);
               localStorage.setItem("likes", likes);
               localStorage.setItem("comments", comments);
               localStorage.setItem("earnings", earnings);
          }
     }, [earnings, subscriberCount, views, comments, likes]);
     React.useEffect(() => {
          if (earnings) {
               navigate("/result-page");
          }
     }, [earnings]);
     let lsViews = localStorage.getItem("views");
     let lsLikes = localStorage.getItem("likes");
     let lsComments = localStorage.getItem("comments");
     let lsEarnings = localStorage.getItem("earnings");
     React.useEffect(() => {
          if ((lsViews, lsLikes, lsComments, lsEarnings)) {
               localStorage.clear();
          }
     }, []);

     return (
          <Box
               color={"white"}
               width={"90%"}
               margin={"auto"}
               height={"92.2vh"}
               display={"flex"}
               justifyContent={"center"}
               alignItems={"center"}
          >
               <Box
                    width={"40%"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    p={5}
                    boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
               >
                    <Heading fontSize={"24px"} lineHeight={"1.2"}>
                         Discover your earning
                    </Heading>
                    <Heading fontSize={"24px"} lineHeight={"1.2"}>
                         potential
                    </Heading>
                    <Text mt="25px" fontSize={"15px"} lineHeight={"1.2"}>
                         Turn your Youtube expertise into a lucrative income
                    </Text>
                    <Text> through resource sharing</Text>
                    <Box w="100%" mt={"40px"} display={"flex"} gap={5}>
                         <Input
                              borderRadius={"20px"}
                              placeholder="🎥 enter youtube video link"
                              value={videoUrl}
                              onChange={(e) => setVideoUrl(e.target.value)}
                         />
                         <Button
                              width={"200px"}
                              colorScheme="red"
                              borderRadius={"20px"}
                              onClick={handleSearch}
                         >
                              Check Earning
                         </Button>
                    </Box>
               </Box>
          </Box>
     );
};
export default Homepage;
