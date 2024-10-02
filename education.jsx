
//education.jsx Luca Distefano 301357231 sept 26,2024


export default function Education() {
     return (
         <>
             <div
                 style={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     height: '100vh', 
                     backgroundColor: 'purple',
                    color: 'white', 
                 }}
             >
                 <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                     My Work Expeirence
                 </p>
                 <a
                     href="..\src\assets\Luca's Resume (2).pdf"
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{
                         fontSize: '2rem', 
                         textDecoration: 'none',
                         border: '2px solid blue',
                         padding: '0.5rem 1rem',
                         borderRadius: '0.5rem',
                         transition: 'background-color 0.3s',
                     }}
                     onMouseOver={(e) => (e.target.style.backgroundColor = 'lightblue')}
                     onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                 >
                     Download My Resume (PDF)
                 </a>
             </div>
         </>
     );
 }
 