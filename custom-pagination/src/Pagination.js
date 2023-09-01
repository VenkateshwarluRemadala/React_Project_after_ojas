import { React, useEffect, useState } from 'react';

function Pagination() {
    const arr = [
        {
            name: "venkat",
            age: 20,
            phone: 123
        },
        {
            name: "one",
            age: 20,
            phone: 1234
        },
        {
            name: "three",
            age: 221,
            phone: 1222
        },
        {
            name: "four",
            age: 24,
            phone: 123111
        },
        {
            name: "five",
            age: 25,
            phone: 12367
        },
        {
            name: "six",
            age: 26,
            phone: 12322
        },
        {
            name: "seven",
            age: 27,
            phone: 123555
        },
        {
            name: "eigth",
            age: 28,
            phone: 1232123
        },
        {
            name: "nine",
            age: 29,
            phone: 123555
        },
        {
            name: "ten",
            age: 34,
            phone: 123333
        },
        {
            name: "leven",
            age: 345,
            phone: 12999
        },
        {
            name: "twelve",
            age: 67,
            phone: 1235666
        },
        {
            name: "thirteen",
            age: 78,
            phone: 123999
        },
        {
            name: "fouteen",
            age: 80,
            phone: 16789
        },
        {
            name: "fifteen",
            age: 81,
            phone: 765589
        },
        {
            name: "sixteen",
            age: 81222,
            phone: 789
        },
        {
            name: "seventeen",
            age: 81444,
            phone: 765
        },
        {
            name: "eigtheen",
            age: 81444,
            phone: 765
        },
        {
            name: "nineteen",
            age: 81444,
            phone: 765
        },
        {
            name: "twenty",
            age: 81444,
            phone: 765
        }
    ];
    const [pages, setpages] = useState([]);
    const [showPage, setShowPage] = useState(1);
    useEffect(() => {
        let settingPages = Math.ceil(arr.length / 3);
        let val = [];
        console.log(arr.length, settingPages);
        for (let i = 0; i < settingPages; i++) {
            val.push(i)

        };
        setpages([...val])
    }, []);

    const previousFun = () => {
        if (showPage == 1) {
            setShowPage(1)
        } else {
            setShowPage(showPage - 1)
        }
    };
    const nextFun = () => {
        if (showPage == pages.length) {
            setShowPage(showPage)
        } else {
            setShowPage(showPage + 1)
        }
    };
    const clickPage = (clickedPage) => {
        setShowPage(clickedPage);
    }
    return (
        <div>
            <h1>Pagination</h1>
            
            {
                arr.slice(showPage * 3 - 3, showPage * 3).map((ele, index) =>
                    <div>
                        {/* <p>{ele.age}</p> */}
                        <p>{ele.name}</p>
                        {/* <p>{ele.phone}</p> */}
                    </div>
                )
            }
            <button onClick={previousFun}>previous</button>
            {
                pages.map((ele, index) => <button key={index} onClick={() => { clickPage(index + 1) }} >{index + 1}</button>)
            }
            <button onClick={nextFun}>next</button>

        </div>
    )
}
export default Pagination;