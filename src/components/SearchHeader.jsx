import React, {useEffect, useState} from 'react';
import { BsYoutube } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function SearchHeader() {
	const { keyword } = useParams();
	const navigate = useNavigate();
	const [text, setText] = useState('');
	const handleTextChange = (e) => setText(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/videos/${text}`);
	}
	useEffect(() => setText(keyword || ''), [keyword])
	return (
		<header className='w-full flex p-4 sticky top-0 bg-zinc-900 z-10'>
			<Link to='/' className='flex items-center'>
				<BsYoutube className='text-3xl text-brand' />
				<h1 className='font-bold ml-2 text-2xl'>YouTube</h1>
			</Link>
			<form onSubmit={handleSubmit} className='w-full flex justify-center'>
				<input className='w-7/12 px-6 py-2 outline-none bg-black text-gray-50 rounded-l-full' type="text" placeholder="검색" value={text} onChange={handleTextChange} />
				<button className='bg-zinc-600 px-6 rounded-r-full'>
					<ImSearch />
				</button>
			</form>
		</header>
	);
}