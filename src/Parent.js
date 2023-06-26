import React from 'react';
import Child from './Child';

const Parent =()=>{

    const task =[
        {name:'Write for Evato tuts',duration:120},
    {name:'Work Out','duration':60},
    {name:'Procrastinate on Dulingo',duration:240}];
       let gettask=(ssa)=>{
        let sa=task.filter(function(s){
            return s.duration<=ssa
        })
        console.log(sa.map((s)=>s.name));
        }
    return(
        <div>
            <Child Fil = {task} get = {gettask}/>
        </div>
    )
}
export default Parent;