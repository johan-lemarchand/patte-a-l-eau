import Link from 'next/link'

export default function Reservation() {
    return (
        <div 
        className="section position-relative" 
        style={{ 
            backgroundImage: 'url(/image/dummy-img-1920x900.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >
        <div className="image-overlay"></div>
        <div className="r-container">
            <div 
            className="mx-auto text-white text-center position-relative d-flex flex-column gap-3"
            style={{ maxWidth: '754px', zIndex: 2 }}
            >
            <div>
                <h3 className="font-2 fw-semibold">
                Make Reservation Now to Book Quality Pet Care
                </h3>
            </div>
            <p>
                Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor consequat id
                porta nibh venenatis cras. Tincidunt praesent semper. Arcu dui vivamus arcu felis
            </p>
            <div className="d-flex flex-row gap-3 justify-content-center">
                <Link href="/booking" className="btn btn-accent px-5 py-3 fw-semibold text-white">
                Book Now
                </Link>
                <Link href="/contact" className="btn btn-accent-outline px-5 py-3 fw-semibold text-white">
                Contact Us
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}