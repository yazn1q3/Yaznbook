import Header from '@/components/Header'
import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';


const Settings = () => {
    const { data: currentUser } = useCurrentUser();
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
      const date = new Date();
      const hours = date.getHours();
      if (hours >= 6 && hours < 18) {
        setGreeting('Good Morning');
      } else {
        setGreeting('Good Night');
      }
    }, []);
    const [logo, setLogo] = useState('');

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        if (hours >= 6 && hours < 18) {
          setLogo('https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3VufHx8fHx8MTY5OTExNjI2Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080');
        } else {
          setLogo('https://images.unsplash.com/photo-1609668233461-019a1e3188ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9vbnx8fHx8fDE2OTkxMTYyMTk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080');
        }
      }, []);
  return (
    <>
    <br />
    <br/>
        <Header label='Settings' showBackArrow />
        <div className="bg-white p-2 rounded-[15px]  flex px-5 py-2" >
        <p className="text-[23px]" >{greeting} <a className="text-[25px]" >{currentUser
?.name}</a></p>    {logo && <img src={logo} alt="Logo" style={{ margin: "3px", borderRadius: "12px" , width: '30px', height: '30px' }} />}
</div>
<br />
<br />
<a>Logout Account</a>
<br />
<hr />
<button onClick={() => signOut()} className="w-[12em] items-center px-2 rounded-[12px] m-2 h-[2em] bg-[#f7f7f7] flex ">Logout Account <AiOutlineLeft /> </button>

    </>
  )
}

export default Settings