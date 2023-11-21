import React from 'react';

const CashIn = () => {
    return (
        <div style={{ backgroundColor: "#2E2925", color: "#FFF", padding: "20px", height: "100vh" }}>
            <h1 style={{ textAlign: 'center'}}>Cash In</h1>
            <div style={{display:"flex",justifyContent:"center"}}>
                <form >
                    <div>

                        <input type='text' name='id' required placeholder='ID' />
                    </div><br />
                    <div>

                        <input type='text' name='name' required placeholder='Name' />
                    </div><br />
                    <div>

                        <input type='text' name='Menu' required placeholder='Menu' />
                    </div><br />
                    <div>
                        <input type='text' name=' Remaining Money' required placeholder='Remaining Money' />
                    </div><br />
                    <div>
                        <input type='text' name=' Total' required placeholder='Total($)' />
                    </div><br />
                    <button style={{
                        width: "180px",
                        height: "35px",
                        borderRadius: "9px",
                        border: "2px solid #CCC",
                        background: " rgba(128, 128, 128, 0.50)",
                        color:"#FFF",
                    }}>
                        Sumit
                    </button>
                </form>
            </div>
        </div>

    );
}

export default CashIn;