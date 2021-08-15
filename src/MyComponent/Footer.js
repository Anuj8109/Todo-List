import React from 'react'

export default function Footer() {
    let footerSytle ={
        position : "fixed",
        left : "0",
        bottom : '0',
        width : "100%"
    }
    return (
        <div className="bg-dark text-light py-1 mt-3" style = {footerSytle}>
            <p className="text-center">Copyright &copy;2021 ItzTodo.com</p>
        </div>
    )
}
