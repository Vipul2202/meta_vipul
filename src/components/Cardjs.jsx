import React from 'react';
import k2 from "../assets/k2.png";

const Cardjs = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-800 p-4">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">     ACTION   GAMES
</h1>

          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <img className='h-12 w-12' src={k2} alt='logo' />
        
            Engage into the intense fire-fight of the different reality by taking part into biggest courageous actions.
</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 rounded-xl">
          <h1 className="font-dmserif text-3xl font-bold text-white">ADVENTURE  GAMES</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Be ready to experience the deep adventure by feeling the true detail of the way and enjoying the one of the best storyline. 
</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full  rounded-xl w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-xl"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">    MYSTERY   GAMES
</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Find the real truth of the Mystery by solving the puzzles or by collecting the clues by your own in a wide variety of escape rooms.
</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full  rounded-xl w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-xl"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">             MUSIC / RYTHM  GAMES

</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
For the music freaks, Score the highest by experiencing the Neon reality and bashing the marks through your hands.
</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full  rounded-xl w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-xl"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">    SPORTS  GAMES
</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Play as a Champion in the stadium andd hear the audience cheering you up. Score as the Blood of winning run through your heart.

</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full  rounded-xl w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 rounded-xl"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">     SHOOTING    GAMES

</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Wield the one of the deadliest weapons to shoot the evils or the Zombies and having the true feel of shooting.

</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
    </div>
    {/* <div className="fixed bottom-16">
      <p className="font-com text-2xl font-semibold text-white">All Images are from <a href="https://unsplash.com" className="text-blue-500">Unsplash.com</a></p>
    </div> */}
  </div>
  
  )
}

export default Cardjs