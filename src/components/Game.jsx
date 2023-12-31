import React from 'react'
import '../App.css'
import { FaAngleRight } from "react-icons/fa";
import qmark from '../assets/qmark.png'
import nerd from '../assets/nerd.png'
import study from '../assets/groupstudy.png'
import pgstack from '../assets/pgstack.png'
import load from '../assets/gameload.png'
import owls from '../assets/owls.png'
import snakegame from '../assets/snakeladder.png'

const game = () => {
    return (
        <div className='overflow-hidden'>
            {/* div 2 */}
            <div className='D-gamebg1 h-auto sm:h-screen'>
                <div className='flex flex-col  sm:flex-row sm:mx-auto pt-32 sm:pt-20 space-y-8  items-center justify-center w-full sm:w-[80%]'>
                    <div className='flex-col sm:justify-start sm:items-start flex w-[80%] space-y-8 sm:space-y-3 justify-center items-center'>
                        <h1 className='text-[50px] D-lazydog    font-bold text-center'>GAMES</h1>
                        <p className='text-xl text-center sm:text-start D-futura'>These courses are designed to be interactive, often using games, puzzles, and visual aids to engage young learners and foster a strong understanding of mathematical concepts. </p>
                        <button className='D-glacialFont bg-rose-600 text-white py-2 px-5 rounded-md text-lg sm:text-2xl mt-4 mx-auto sm:mx-0 '>Explore</button>

                    </div>
                    <div className='flex justify-end w-full'>
                        <img src={qmark} alt="" className='w-32 sm:w-56' />
                    </div>

                </div>
            </div>

            {/* div 2 */}
            <div  className='D-gamebg2 h-auto  pt-10 sm:py-20' >
                <div className='flex sm:flex-row flex-col space-y-3 justify-center sm:justify-center sm:space-x-56  items-center sm:w-[100%] sm:mx-auto sm:pl-14'>
                    <div className='flex flex-col justify-start items-center sm:items-start space-y-4 '>
                        <img src={nerd} alt="" className='w-52 sm:w-60' />
                        <p className='text-2xl sm:text-3xl D-lazydog'>my name is :</p>
                        <input type="text" placeholder='Enter name' className='D-lazydog rounded-md bg-gray-200 p-2 text-xl' />
                        <button>
                            <FaAngleRight className='h-14 w-10' />
                        </button>
                    </div>
                    <img src={study} alt="" className='w-[90%] sm:w-[50%]' />

                </div>
            </div>
            {/* div 3 */}
            <div  className='D-gamebg3 pt-24 pb-10 sm:pb-40 sm:pt-2  h-auto  '>
                <div className='flex flex-col sm:w-[80%] sm:my-0 sm:mx-auto  sm:flex-row-reverse sm:justify-end  items-center '>
                    <div className='flex flex-col space-y-3'>
                        <h1 className='text-3xl sm:text-[60px] sm:mb-4 text-center sm:text-left font-bold D-lazydog'>ICY  PENGUIN STACK</h1>
                        <p className='text-xl text-center sm:text-left D-futura'>Make a stack of penguins and increase your score.
                            Good Luck!
                        </p>
                        <div className='sm:mt-5'>
                            <p className='text-2xl text-center sm:text-left sm:font-bold sm:text-3xl sm:ml-20 D-futura'>Your score</p>
                            <img src={load} alt="" className='mx-auto sm:mx-0 w-64 sm:w-96' />
                        </div>
                    </div>
                    <img src={pgstack} alt="" className='w-36 sm:w-40 mt-10 sm:mr-32 ' />

                </div>
            </div>
            {/* div 4 */}
            <div className='D-gamebg4 h-auto py-16'>
                <div className='flex flex-col sm:flex-row sm:w-[90%] sm:mx-auto space-y-8 items-center justify-center'>
                    <div className='flex flex-col space-y-4 mt-12 w-[90%]'>
                        <h1 className='text-center  sm:text-left text-4xl font-bold D-lazydog sm:text-[50px]'>WISE LAB OWLS</h1>
                        <p className='text-center sm:text-left text-xl D-futura'>Count the number of owls and answer. Increase your score. Good Luck!</p>
                        <h3 className='text-center sm:text-left text-xl font-semibold mt-5 D-glacialFont '>Enter no of owls</h3>
                        <input type="text" className='w-64 mx-auto sm:mx-0 rounded-md p-3 bg-slate-200 outline-none' />
                        <div>
                            <p className='text-center sm:text-3xl sm:text-left text-2xl D-futura font-bold sm:ml-32'>Your score</p>
                            <img src={load} className='w-60 sm:w-96 mx-auto sm:mx-0' />
                        </div>
                    </div>
                    <img src={owls} alt="" />
                </div>
            </div>

            {/* div 4 */}
            <div className='D-gamebg4 h-auto py-16'>
                <div className='flex flex-col sm:flex-row sm:w-[80%] sm:space-x-32 sm:mx-auto space-y-8 items-center justify-center'>
                    <div className='flex flex-col space-y-4 sm:space-y-8 mt-12 w-[90%]'>
                        <h1 className='text-center  sm:text-left text-4xl font-bold D-lazydog sm:text-[50px]'>Math magician mousy</h1>
                        <p className='text-center sm:text-left text-xl D-futura'>Count the number of cheese slices and jump 2 steps for each slice in order to eat all cheese slices. Also, save yourself from snakes.
                            Good Luck!</p>
                        <div>
                            <p className='text-center sm:text-3xl sm:text-left text-2xl D-futura font-bold sm:ml-32'>Your score</p>
                            <img src={load} className='w-60 sm:w-96 mx-auto sm:mx-0' />
                        </div>
                    </div>
                    <img src={snakegame} alt="" className='w-64 sm:w-96' />
                </div>
            </div>

        </div>
    )
}

export default game
