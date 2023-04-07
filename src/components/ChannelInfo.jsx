import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useYoutubeApi} from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
	const { youtube } = useYoutubeApi();
	const { data: channelInfo } = useQuery(
		['channel', id],
		() => youtube.channelDetail(id),
		{ staleTime: 1000 * 60 * 5 }
	);
	return (
		<div className='flex my-4 mb-8 items-center'>
			{
				channelInfo
					? <img className='rounded-full w-10 h-10' src={channelInfo.thumbnails.default.url} alt={name}/>
					: <div>{ name.charAt(0).toUpperCase() }</div>
			}
			<p className='text-lg font-medium ml-2'>{ name }</p>
		</div>
	);
}