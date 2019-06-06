import React from 'react'
import '../css/tailwind.css'

export default function Card(props) {
    return (
        <div className="p-4 border-box w-full md:w-1/3">
            <div className={"w-full rounded " + (props.color || "bg-blue-400")}>
                <div className="card-header"></div>
                <div className="card-body">
                    <h1 className="py-4 px-5 text-4xl text-white">{props.title}</h1>
                    <h4 className="pb-8 px-5 text-xl text-white">{props.content}</h4>
                </div>
                <div className="card-footer p-2 rounded-b bg-black opacity-25 clearfix">
                    <a href={props.link} className="float-right py-1 text-white font-bold">{props.linkName}</a>
                </div>
            </div>
        </div>
    )
}
