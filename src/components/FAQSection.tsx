import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'E-commerce Brands',
      answer: 'Direct-to-consumer (DTC) merchants, online marketplaces, and subscription product companies. Our decline-salvage engine integrates seamlessly with Shopify, WooCommerce, Magento, and custom e-commerce platforms to recover failed checkout transactions.'
    },

    {
      question: 'Logistics & Delivery Services',
      answer: 'Transportation, shipping, and logistics companies with recurring billing or pre-authorized payment flows. Reduce payment failures for subscription deliveries, pre-paid services, and account-based billing.'
    },
    {
      question: 'Call-Center Merchants',
      answer: 'Businesses processing high-volume phone orders and MOTO (mail-order/telephone-order) transactions. Our system is optimized for agent-assisted checkouts and call-center billing environments with elevated decline rates.'
    },
    {
      question: 'Retail Companies',
      answer: 'Merchants processing card-not-present and card-present transactions in retail environments—in-store payments, point-of-sale systems, omnichannel billing flows, and retail checkout experiences. We support recovery across all retail payment channels.'
    },
    {
      question: 'Subscription & Membership Services',
      answer: 'SaaS platforms, membership sites, recurring billing services, and any business model relying on automatic renewals. Reduce involuntary churn by recovering declined subscription payments before customers cancel.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Who We Serve</FAQTitle>
        <FAQDescription>
          We support businesses across multiple industries and payment environments
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
