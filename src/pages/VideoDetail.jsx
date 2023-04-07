import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
	const { videoId } = useParams();
	const { state: { video } } = useLocation();
	const { title, description, channelId, channelTitle } = video.snippet;

	return (
		<section className='flex flex-col lg:flex-row'>
			<article className='basis-4/6'>
				<iframe
					title={videoId}
					id="player"
					className="aspect-video"
					width="100%"
					src={`http://www.youtube.com/embed/${videoId}`}
				/>
				<div className='p-8'>
					<h2 className='text-xl font-bold'>{ title }</h2>
					<ChannelInfo id={channelId} name={channelTitle} />
					<pre className='whitespace-pre-wrap'>
						{ description }
					</pre>
				</div>
			</article>
			<section className='basis-2/6'>
				<RelatedVideos id={videoId} />
			</section>
		</section>
	);
}