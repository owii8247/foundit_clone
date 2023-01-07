import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
const Middle = () => {
    return (
        <>
            <Box p={10}>
                <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"} >Employers of Choice</Text>
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    slidesPerView={8}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>

                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/yxRn3N2x6vrAGJ3YMEaOYRjRZor1YZzlpZkPJWll.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/HN5y7hp89MHcEWgrSi9haJG4iDYWE3DHH0RvvEau.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2021/october/S75zzSg0xsbyLirgPUWCqPUuUT9LpsXVQp6uLb7B.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/march/THyXXtT5sPRi1gVwdxkrksZzSsv7f5UkDFwkaQJD.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2023/january/yxRn3N2x6vrAGJ3YMEaOYRjRZor1YZzlpZkPJWll.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/november/saSi8rqCWWMfmv66nb529x2QBqOijsxVpymhjYUK.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/july/JpYoK5TOwijxrufQCDo0F2jYc6sImQgHW6Befx8f.jpeg" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/jobs">
                            <Image src="https://media.foundit.in/trex/prod-cdn/media/promotedemployer/2022/november/uoJvClO5ad5B9b22uCrM8ASvfygW2AiCVwSDUOXF.jpeg" />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </Box>
            <Image margin={"auto"} src="https://tpc.googlesyndication.com/simgad/13052027735813034364" />
            <Box p={10}>
                <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"start"} >Popular Searches</Text>
            </Box>
        </>
    )
}

export default Middle