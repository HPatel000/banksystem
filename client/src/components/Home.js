import React from 'react'
import card from '../images/creditCard.jpg'
import bank from '../images/bank.jpg'

const Home = () => {
  return (
    <div className='Home'>
      <h1>The TSF Bank</h1>
      <p>
        The TSF bank Corporation is an Indian multinational investment bank and
        financial services holding company headquartered in Bangaluru. TSF bank
        was formed through NationsBank's acquisition in 1998
      </p>
      <div className='images'>
        <img src={card} alt='' />
        <img src={bank} alt='' />
      </div>
      <p>
        It offers a wide range of banking products and financial services for
        corporate and retail customers through a variety of delivery channels
        and specialised subsidiaries in the areas of investment banking, life,
        non-life insurance, venture capital and asset management. The bank has a
        network of 5,275 branches and 15,589 ATMs across India and has a
        presence in 17 countries. TSF Bank is one of the Big banks of India. The
        bank has subsidiaries in the United Kingdom and Canada; branches in
        United States, Singapore, Bahrain, Hong Kong, Qatar, Oman, Dubai
        International Finance Centre, China and South Africa; as well as
        representative offices in United Arab Emirates, Bangladesh, Malaysia and
        Indonesia. The company's UK subsidiary has also established branches in
        Belgium and Germany
      </p>
    </div>
  )
}
export default Home
