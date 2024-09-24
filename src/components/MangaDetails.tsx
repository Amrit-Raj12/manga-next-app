
import useShareLinks from '@/hooks/useShareLinks'
import { MangaDetailProps } from '@/types/types'
import { useRouter } from 'next/router'
import React from 'react'

interface DetailsProps {
    mangaData: MangaDetailProps
    mangaDetailsData: any
}

const MangaDetails: React.FC<DetailsProps> = ({mangaData, mangaDetailsData}) => {

    const router = useRouter()

    const { id } = router.query

    const navigateToRead = (title: string) => {
        router.push(`/read/${title}/${id}/chapter-1`)
    }

    const {
        getTelegramLink,
        getTwitterLink,
        getFacebookLink,
        getRedditLink,
        getWhatsAppLink,
      } = useShareLinks()
   

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="relative">
                {/* <div className="absolute inset-0.5 bg-gradient-to-tl from-[#261B1C] to-[#D69738]  rounded-lg mx-4 px-4 blur-md opacity-75"></div> */}
                <div className="min-h-[556px] rounded-lg relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${mangaData?.imageUrl})` }}></div>
            </div>

            <div className="min-h-32 rounded-lg lg:col-span-2">
                <article className="rounded-xl bg-transparent p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start sm:gap-8">
                        <div>
                            <strong
                                className="rounded border border-primary bg-primary px-3 py-1.5 text-[10px] font-medium text-white"
                            >
                                {mangaData?.status}
                            </strong>
                            <p className="mt-4 text-xs font-medium text-gray-500">
                                    Updated At: <a href="#" className="underline hover:text-gray-700">{mangaData.updated}</a>
                                    
                                </p>

                            <h3 className="mt-4 text-lg font-medium sm:text-xl text-lightText dark:text-darkText">
                                <p className=""> {mangaData.name} </p>
                            </h3>

                            <div className='my-2 flex flex-wrap gap-2'>
                                {mangaData?.genres.map((genre, idx) => (
                                    <span
                                        key={idx}
                                    className="whitespace-nowrap rounded-full border border-primary px-2.5 py-0.5 text-sm text-primary"
                                >
                                    {genre}
                                </span>
                                ))}
                                
                            </div>



                            <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                                 {mangaDetailsData.loading ? "..." : mangaDetailsData.mangaDetails?.description}
                            </p>

                            <div className='flex flex-row gap-2 items-center justify-start mt-2'>
                                <button onClick={() =>navigateToRead(mangaData.name)} className='rounded-lg bg-primary px-2.5 py-1 text-xl text-lightText dark:text-purple-100'>Read Now</button>
                                <button className='rounded-lg bg-gray-500 px-2.5 py-1 text-xl text-primary dark:text-purple-100'>
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="#080341" /> </g></svg>
                                </button>
                            </div>

                            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                <div className="flex items-center gap-1 text-gray-500">
                                    <svg
                                        className="size-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>

                                    <p className="text-xs font-medium">{mangaData?.view} Views</p>
                                </div>

                                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                    Author <a href="#" className="underline hover:text-gray-700">{mangaData.author}</a>
                                    
                                </p>
                            </div>
                            <div className=' border-l-2 border-primary p-4 m-4 rounded-lg text-lightText dark:text-darkText'>
                                <div>
                                    <div className='flex items-center'>
                                        <svg className='fill-primary mr-2' width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" /> </g></svg>

                                        <p className='text-sm'>9.5 <span>(260 voted)</span></p>
                                    </div>
                                    <p className='text-sm'>What do you think?</p>
                                    <div className='flex flex-row gap-2 my-2 group'>
                                        <div className="w-20 h-20 bg-gray-300 rounded-md flex flex-col justify-center items-center cursor-pointer">
                                            
                                                <picture>
                                                    <p className='group-hover:hidden'>😩</p>
                                                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f629/512.webp" type="image/webp" />
                                                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f629/512.gif" className='hidden group-hover:block' alt="😩" width={32} height={32} />
                                                </picture>

                                        
                                            <p className='text-lightText'>Boring</p>
                                        </div>
                                        <div className="w-20 h-20 bg-gray-300 rounded-md flex flex-col justify-center items-center cursor-pointer group">
                                            <picture>
                                                <p className='group-hover:hidden'>🤗</p>
                                                <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.webp" type="image/webp" />
                                                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.gif" className='hidden group-hover:block' alt="🤗" width={32} height={32} />
                                            </picture>

                                            <p className='text-lightText'>Great</p>
                                        </div>
                                        <div className="w-20 h-20 bg-gray-300 rounded-md flex flex-col justify-center items-center cursor-pointer group">
                                            <p className='group-hover:hidden'>🤩</p>
                                            <picture>
                                                <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.webp" type="image/webp" />
                                                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.gif" className='hidden group-hover:block' alt="🤩" width={32} height={32} />
                                            </picture>

                                            <p className='text-lightText'>Amazing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-4 mt-8 flex-wrap'>
                                {/* Telegram */}
                                <a
                                    className="group relative inline-flex items-center overflow-hidden rounded bg-[#0976AC] px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#0976AC]"
                                    target="_blank" rel="noopener noreferrer"
                                    href={getTelegramLink()}
                                >
                                    <span className="absolute -start-full transition-all group-hover:start-4">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" className='fill-white stroke-none' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M21.997 12C21.997 17.5228 17.5198 22 11.997 22C6.47415 22 1.99699 17.5228 1.99699 12C1.99699 6.47715 6.47415 2 11.997 2C17.5198 2 21.997 6.47715 21.997 12ZM12.3553 9.38244C11.3827 9.787 9.43876 10.6243 6.52356 11.8944C6.05018 12.0827 5.8022 12.2669 5.77962 12.4469C5.74147 12.7513 6.12258 12.8711 6.64155 13.0343C6.71214 13.0565 6.78528 13.0795 6.86026 13.1038C7.37085 13.2698 8.05767 13.464 8.41472 13.4717C8.7386 13.4787 9.10009 13.3452 9.49918 13.0711C12.2229 11.2325 13.629 10.3032 13.7172 10.2831C13.7795 10.269 13.8658 10.2512 13.9243 10.3032C13.9828 10.3552 13.977 10.4536 13.9708 10.48C13.9331 10.641 12.4371 12.0318 11.6629 12.7515C11.4216 12.9759 11.2504 13.135 11.2154 13.1714C11.137 13.2528 11.0571 13.3298 10.9803 13.4038C10.506 13.8611 10.1502 14.204 11 14.764C11.4083 15.0331 11.7351 15.2556 12.0611 15.4776C12.4171 15.7201 12.7722 15.9619 13.2317 16.2631C13.3487 16.3398 13.4605 16.4195 13.5694 16.4971C13.9837 16.7925 14.3559 17.0579 14.8158 17.0155C15.083 16.991 15.359 16.7397 15.4992 15.9903C15.8305 14.2193 16.4817 10.382 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6154 8.40715C16.6021 8.32932 16.5743 8.21842 16.4731 8.13633C16.3533 8.03911 16.1683 8.01861 16.0856 8.02C15.7095 8.0267 15.1324 8.22735 12.3553 9.38244Z" strokeLinejoin="round" /> </g></svg>

                                    </span>

                                    <span className="text-sm font-medium transition-all group-hover:ms-4"> Share </span>
                                </a>

                                {/* Twitter */}
                                <a
                                    className="group relative inline-flex items-center overflow-hidden rounded px-8 py-3 text-white focus:outline-none focus:ring active:text-white bg-black"
                                    target="_blank" rel="noopener noreferrer"
                                    href={getTwitterLink()}
                                >
                                    <span className="absolute -start-full transition-all group-hover:start-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                        </svg>

                                    </span>

                                    <span className="text-sm font-medium transition-all group-hover:ms-4"> Share </span>
                                </a>

                                {/* Facebook */}
                                <a
                                    className="group relative inline-flex items-center overflow-hidden rounded bg-[#3B5998] px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#3B5998]"
                                    target="_blank" rel="noopener noreferrer"
                                    href={getFacebookLink()}
                                >
                                    <span className="absolute -end-full transition-all group-hover:end-4">
                                        <svg width="28px" height="28px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <circle cx={24} cy={24} r={20} fill="#3B5998" /> <path fillRule="evenodd" clipRule="evenodd" d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z" fill="white" /> </g></svg>

                                    </span>

                                    <span className="text-sm font-medium transition-all group-hover:me-4"> Share </span>
                                </a>

                                {/* Reddit */}
                                <a
                                    className="group relative inline-flex items-center bg-[#FC471E] overflow-hidden rounded px-8 py-3 text-white focus:outline-none focus:ring active:text-white"
                                    target="_blank" rel="noopener noreferrer"
                                    href={getRedditLink()}
                                >
                                    <span className="absolute -end-full transition-all group-hover:end-4">
                                        <svg width="28px" height="28px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z" fill="#FC471E" /> <path fillRule="evenodd" clipRule="evenodd" d="M20.0193 8.90951C20.0066 8.98984 20 9.07226 20 9.15626C20 10.0043 20.6716 10.6918 21.5 10.6918C22.3284 10.6918 23 10.0043 23 9.15626C23 8.30819 22.3284 7.6207 21.5 7.6207C21.1309 7.6207 20.7929 7.7572 20.5315 7.98359L16.6362 7L15.2283 12.7651C13.3554 12.8913 11.671 13.4719 10.4003 14.3485C10.0395 13.9863 9.54524 13.7629 9 13.7629C7.89543 13.7629 7 14.6796 7 15.8103C7 16.5973 7.43366 17.2805 8.06967 17.6232C8.02372 17.8674 8 18.1166 8 18.3696C8 21.4792 11.5817 24 16 24C20.4183 24 24 21.4792 24 18.3696C24 18.1166 23.9763 17.8674 23.9303 17.6232C24.5663 17.2805 25 16.5973 25 15.8103C25 14.6796 24.1046 13.7629 23 13.7629C22.4548 13.7629 21.9605 13.9863 21.5997 14.3485C20.2153 13.3935 18.3399 12.7897 16.2647 12.7423L17.3638 8.24143L20.0193 8.90951ZM12.5 18.8815C13.3284 18.8815 14 18.194 14 17.3459C14 16.4978 13.3284 15.8103 12.5 15.8103C11.6716 15.8103 11 16.4978 11 17.3459C11 18.194 11.6716 18.8815 12.5 18.8815ZM19.5 18.8815C20.3284 18.8815 21 18.194 21 17.3459C21 16.4978 20.3284 15.8103 19.5 15.8103C18.6716 15.8103 18 16.4978 18 17.3459C18 18.194 18.6716 18.8815 19.5 18.8815ZM12.7773 20.503C12.5476 20.3462 12.2372 20.4097 12.084 20.6449C11.9308 20.8802 11.9929 21.198 12.2226 21.3548C13.3107 22.0973 14.6554 22.4686 16 22.4686C17.3446 22.4686 18.6893 22.0973 19.7773 21.3548C20.0071 21.198 20.0692 20.8802 19.916 20.6449C19.7628 20.4097 19.4524 20.3462 19.2226 20.503C18.3025 21.1309 17.1513 21.4449 16 21.4449C15.3173 21.4449 14.6345 21.3345 14 21.1137C13.5646 20.9621 13.1518 20.7585 12.7773 20.503Z" fill="white" /> </g></svg>

                                    </span>

                                    <span className="text-sm font-medium transition-all group-hover:me-4"> Share </span>
                                </a>

                                {/* Whatsapp */}
                                <a
                                    className="group relative inline-flex items-center bg-[#95D03A] overflow-hidden rounded px-8 py-3 text-white focus:outline-none focus:ring active:text-white"
                                    target="_blank" rel="noopener noreferrer"
                                    href={getWhatsAppLink()}
                                >
                                    <span className="absolute -end-full transition-all group-hover:end-4">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#ffffff" /> </g></svg>


                                    </span>

                                    <span className="text-sm font-medium transition-all group-hover:me-4"> Share </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default MangaDetails