"use client";

import ThemeSwitcher from "../ThemeSwitcher";

export default function Header() {
	return (
		<div className='flex justify-between items-center bg-black text-white h-[50px] px-4'>
			<ThemeSwitcher className='flex-shrink-0' />
			<h1 className='text-2xl text-center'>
				Bussines News
			</h1>
		</div>
	);
}
