import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from './loginPage';
import ProductOverview from './home/productOverview';

export default function HomePage() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className='w-full h-[calc(100vh-100px)] '>
        <Routes path="/*">
          <Route path="/" element={
            <div className="p-4">
              {/* Carousel Section */}
              <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div>
                  <img src="/images/beauty1.jpg" alt="Beauty Product 1" />
                </div>
                <div>
                  <img src="/images/beauty2.jpg" alt="Beauty Product 2" />
                </div>
                <div>
                  <img src="/images/beauty3.jpg" alt="Beauty Product 3" />
                </div>
              </Carousel>
              {/* Hero Section */}
              <div className="text-center my-8">
                <h1 className="text-3xl font-bold">Glow with Confidence</h1>
                <p className="text-gray-600 mt-2">Explore our premium skincare & beauty essentials.</p>
                <Button className="mt-4">Shop Now</Button>
              </div>
              {/* Featured Products */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="p-4 text-center">
                    <img src={`/images/product${item}.jpg`} alt={`Product ${item}`} className="w-full h-48 object-cover rounded-lg" />
                    <CardContent>
                      <h2 className="text-lg font-semibold">Product {item}</h2>
                      <p className="text-gray-500">$29.99</p>
                      <Button className="mt-2">Add to Cart</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          } />
          <Route path="/login" element={<LoginPage />} />      
          <Route path="/productInfo/:id" element={<ProductOverview />} />
        </Routes>  
      </div>
    </div>
  );
}
