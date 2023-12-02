import React from 'react';

export default function NotFound() {
    const capitalize = () => {
        const h2Elements = document.getElementsByTagName('h2');
        for (let i = 0; i < h2Elements.length; i++) {
            h2Elements[i].innerText = h2Elements[i].innerText.toUpperCase();
        }
    };

    // Call the capitalize function when the component is mounted
    React.useEffect(() => {
        capitalize();
    }, []);

    return (
        <div>
            <h2 className='text-center text-3xl my-20'>
                The link is not broken. Please reach out to us at ayodeleomojolag@gmail.com
            </h2>
        </div>
    );
}
