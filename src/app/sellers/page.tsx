"use client";
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import SellerCard from '../../components/Sellers/sellerCard';
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';

interface Seller {
      id: string;
      fullName: string;
      email: string;
      phone: string;
      address: string;
}

const SellersList: React.FC = () => {
      const [sellers, setSellers] = useState<Seller[]>([]);

      useEffect(() => {
            // Fetches all sellers 
            const fetchSellers = async () => {
                  const res = await fetch('/api/product/getSellers');
                  const data: Seller[] = await res.json();
                  setSellers(data);
            };

            fetchSellers();
      }, []);

      return (
            <DefaultLayout>
                  <Breadcrumb pageName='Seller' />
                  <div className='grid gap-4'>
                        {sellers.map((seller) => (
                              <SellerCard key={seller.id} seller={seller} />
                        ))}
                  </div>
            </DefaultLayout>
      );
};

export default SellersList;