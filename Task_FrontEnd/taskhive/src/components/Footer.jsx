import React from 'react'

export default function Footer() {
    const currentYear=new Date().getFullYear();
  return (
    <footer className="bg-dark text-white text-center py-3"
    style={{
        position:"fixed",
        bottom:"0",
        right: "0",
        left: "0",
        marginTop:"50px",
    }}>
    <div>
      &copy;{currentYear}Lalit Katkam. All Rights Reserved.
    </div>
    </footer>
  )
}
