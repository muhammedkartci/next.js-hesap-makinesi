'use client';
import styles from './page.module.css'
import { useState } from 'react'
export default function Home() {

  const [operation_type, set_operation_type] = useState("add");
  const [result, set_result] = useState( );
  const [input1, set_input1] = useState( );
  const [input2, set_input2] = useState( );


  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.input_div}>
            <input type='number' value={input1}
              onInput={(e)=>{
                set_input1(e.target.value)
                if(operation_type=="add"){
                  set_result(parseInt(e.target.value)+parseInt(input2))
                }else if(operation_type=="ext"){
                  set_result(e.target.value-input2)
                }else if(operation_type=="mul"){
                  set_result(e.target.value*input2)
                }else if(operation_type=="div"){
                  set_result(e.target.value/input2)
                }
                  
              }}
            />
          </div>
        </div>
        <div className={styles.box+" "+styles.operation_type}>
          {
            operation_type=="add"?
            <svg style={{width: "30px",height: "30px"}} viewBox="0 0 512 512">  <path d="M480 224H288V32a32 32 0 0 0-64 0v192H32a32 32 0 0 0 0 64h192v192a32 32 0 0 0 64 0V288h192a32 32 0 0 0 0-64z"/></svg>
            :
            operation_type=="ext"?
            <svg stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M5 12h14"/></svg>
            :
            operation_type=="mul"?
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" ><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
            :
            operation_type=="div"?
            <svg stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M16.88 3.55l-9.76 16.9"/></svg>
            :
            ""
          }  
        </div>
        <div className={styles.box}>
          <div className={styles.input_div}>
            <input type='number' value={input2}
             onInput={(e)=>{
              set_input2(e.target.value)
              if(operation_type=="add"){
                set_result(parseInt(input1)+parseInt(e.target.value))
              }else if(operation_type=="ext"){
                set_result(input1-e.target.value)
              }else if(operation_type=="mul"){
                set_result(input1*e.target.value)
              }else if(operation_type=="div"){
                set_result(input1/e.target.value)
              }
            }}
            />
          </div>
        </div>
        <div className={styles.box+" "+styles.operation_box}
          onClick={()=>{
            set_operation_type("add")
            set_result(parseInt(input1)+parseInt(input2))
          }}
        >
          <svg style={{width: "30px",height: "30px"}} viewBox="0 0 512 512">  <path d="M480 224H288V32a32 32 0 0 0-64 0v192H32a32 32 0 0 0 0 64h192v192a32 32 0 0 0 64 0V288h192a32 32 0 0 0 0-64z"/></svg>
        </div>
        <div className={styles.box+" "+styles.operation_box}
        onClick={()=>{
          set_operation_type("ext")
          set_result(input1-input2)
        }}
        >
          <svg stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M5 12h14"/></svg>
        </div>
        <div className={styles.box+" "+styles.operation_box}
        onClick={()=>{
          set_operation_type("mul")
          set_result(input1*input2)
        }}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" ><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
        </div>
        <div className={styles.box+" "+styles.operation_box}
        onClick={()=>{
          set_operation_type("div")
          set_result(input1/input2)
        }}
        >
          <svg stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" viewBox="0 0 24 24"><path d="M16.88 3.55l-9.76 16.9"/></svg>
        </div>
        <div className={styles.box}>
          <div className={styles.input_div}>
            <input type='number' readOnly value={result}/>
          </div>
        </div>
      </div>
    </div>
  )
}
