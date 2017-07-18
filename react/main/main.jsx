import React from 'react';

const Main = ()=> {
  return (<main >
            <h1 className="title">Выберете категорию:</h1>
        <ul className="container">
            <li className="element">
                <a className="content-center" href="adminSubject.html">
                    C#
                    <p className="adminMenu">
                        <span className="edit" onclick="raz(event)"></span> <span className="delete"></span>
                    </p>
                </a>
            </li>
            <li className="element">
                <a className="content-center" href="adminSubject.html">
                    C++
                    <p className="adminMenu">
                        <span className="edit" onclick="raz(event)"></span> <span className="delete"></span>
                    </p>
                </a>
            </li>
            <li className="element">
                <a className="content-center" href="adminSubject.html">
                    Ruby
                    <p className="adminMenu">
                        <span className="edit" onclick="raz(event)"></span> <span className="delete"></span>
                    </p>
                </a>
            </li>
            <li className="element">
                <a className="content-center" href="adminSubject.html">
                    Java
                    <p className="adminMenu">
                        <span className="edit" onclick="raz(event)"></span> <span className="delete"></span>
                    </p>
                </a>
            </li>
            <li className="element">
                <a className="content-center" href="adminSubject.html">
                    JS
                    <p className="adminMenu">
                        <span className="edit" onclick="raz(event)"></span> <span className="delete"></span>
                    </p>
                </a>
            </li>
            <li className="element">
                <a className="content-center" href="adminSubject.html">
                    HTML
                    <p className="adminMenu">
                        <span className="edit" onclick="raz(event)"></span> <span className="delete"></span>
                    </p>
                </a>
            </li>
            <li className="element">
                <a className="content-center" href="adminSubject.html">
                    CSS
                    <p className="adminMenu">
                        <span className="edit" onclick="raz(event)"></span> <span className="delete"></span>
                    </p>
                </a>
            </li>
            <li className="element">
                <a className="content-center" href="adminSubject.html">
                    XML
                    <p className="adminMenu">
                        <span className="edit" onclick="raz(event)"></span> <span className="delete"></span>
                    </p>
                </a>
            </li>
            <li className="element">
                <a className="content-center" href="adminSubject.html">
                    C#
                    <p className="adminMenu">
                        <span className="edit" onclick="raz(event)"></span> <span className="delete"></span>
                    </p>
                </a>
            </li>
            
        </ul>
        </main>);
};

export default Main;