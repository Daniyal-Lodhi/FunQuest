import React from 'react'
import pencil from '../assets/pencil.png'
import calc1 from '../assets/calc1.png'
import calc2 from '../assets/calc2.png'
import calc3 from '../assets/calc3.png'
import calc4 from '../assets/calc4.png'


const Mahamscreen1 = () => {
    return (
        <div className='D-mahams1 h-auto sm:h-screen  py-5'>
            <div>
                <div className='mx-auto text-center font-bold text-lg text-[#c1ff72] D-futura'>Let's add some fun to our day – it's time to make numbers dance together!</div>
                <div className='mx-auto text-center mt-24 mb-5 text-4xl text-white underline cursor-pointer decoration-red-600 hover:decoration-[#b8fb61] font-bold D-lazydog'>ADDITION WORKSHEET</div>
                <div className='flex flex-col   mx-auto  items-center justify-center space-y-8 sm:hidden'>
                    <img src={pencil} className='w-40 ml-8 ' />
                    <div className='flex justify-center items-center space-x-4 w-[80%] bg-[#a479cf] rounded-xl px-3 py-2'>
                        <img src={calc1} alt="" className='w-32' />
                        <input type="text" className='bg-white w-10 h-10 outline-none text-xl' />
                    </div>

                    <div className='flex justify-center items-center space-x-4 w-[80%] bg-[#a479cf] rounded-xl px-3 py-2'>
                        <img src={calc2} alt="" className='w-32' />
                        <input type="text" className='bg-white w-10 h-10 outline-none text-xl' />
                    </div>

                    <div className='flex justify-center items-center space-x-4 w-[80%] bg-[#a479cf] rounded-xl px-3 py-2'>
                        <img src={calc3} alt="" className='w-32' />
                        <input type="text" className='bg-white w-10 h-10 outline-none text-xl' />
                    </div>

                    <div className='flex justify-center items-center space-x-4 w-[80%] bg-[#a479cf] rounded-xl px-3 py-2'>
                        <img src={calc4} className='w-32' />
                        <input type="text" className='bg-white w-10 h-10 outline-none text-xl' />
                    </div>
                </div>
                <div className=' mt-10 sm:flex justify-center items-center space-x-4 hidden '>
                    <div className='flex flex-col space-y-5 w-[30%] '>
                        <div className='flex justify-center h-28 items-center space-x-4 w-full bg-[#a479cf] rounded-xl px-3 py-2'>
                            <img src={calc1} alt="" className='w-40' />
                            <input type="text" className='bg-white w-10 h-10 outline-none text-xl' />
                        </div>
                        <div className='flex justify-center h-28 items-center space-x-4 w-full bg-[#a479cf] rounded-xl px-3 py-2'>
                            <img src={calc2} alt="" className='w-40' />
                            <input type="text" className='bg-white w-10 h-10 outline-none text-xl' />
                        </div>
                    </div>
                    <div className='w-[30%]' >
                        <img src={pencil} className='h-full w-72 ml-10' />
                    </div>
                    <div className='flex flex-col space-y-5 w-[30%]'>
                        <div className='flex justify-center h-28 items-center space-x-4 w-full bg-[#a479cf] rounded-xl px-3 py-3'>
                            <img src={calc3} alt="" className='w-40' />
                            <input type="text" className='bg-white w-10 h-10 outline-none text-xl' />
                        </div>
                        <div className='flex h-28 justify-center items-center space-x-4 w-full bg-[#a479cf] rounded-xl px-3 py-4'>
                            <img src={calc4} alt="" className='w-40' />
                            <input type="text" className='bg-white w-10 h-10 outline-none text-xl' />
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Mahamscreen1
