
const NavBar = () => {
  return (
    <div className={'absolute overflow-hidden w-full h-12 grid grid-cols-2 grid-rows-1 bg-black justify-items-center'}>
        <div className={"order-first flex flex-col justify-around items-center justify-self-start self-center size-10 bg-transparent border-none cursor-pointer pl-2 z-10"}>
            <div className={"w-10 h-1 bg-white rounded-lg relative origin-1"}/>
            <div className={"w-10 h-1 bg-white rounded-lg relative origin-1"}/>
            <div className={"w-10 h-1 bg-white rounded-lg relative origin-1"}/>
        </div>
    </div>
  )
}

export default NavBar