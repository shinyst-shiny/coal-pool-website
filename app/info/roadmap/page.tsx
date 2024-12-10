import React from 'react'

export default function Page () {
  return (
    <div className="max-w-4xl w-[56rem] mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Roadmap</h1>
      <div className="text-center mb-6">
        <p className="text-lg leading-relaxed">
          This is the roadmap for the website and the pool. The order does not mean that one thing has priority over
          another or the execution order of what is written. We are committed to enhancing the user experience and
          expanding the functionalities of our platform. Here&#39;s what you can expect in the near future:
        </p>
      </div>
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <strong>Web miner:</strong> We are developing a web-based miner that will allow users to connect their wallets
          and mine directly from their browsers, anywhere and anytime. This feature aims to make mining more accessible
          and convenient for everyone.
        </li>
        <li>
          <strong>Passive income rewards for LP stakers:</strong> We plan to introduce a system where liquidity
          providers (LP) can earn passive income by staking with the guild. This will provide an additional incentive
          for users to participate in the ecosystem.
        </li>
        <li>
          <strong>Website Pool stats section:</strong> A dedicated section on the website will display comprehensive
          statistics about the pool, including performance metrics and historical data. This will help users make
          informed decisions based on real-time data.
        </li>
        <li>
          <strong>Website miner stats section:</strong> Miners will have access to detailed statistics about their
          mining activities, including hash rates, earnings, and more. This transparency will allow miners to optimize
          their operations.
        </li>
        <li>
          <strong>Website Miner claim rewards:</strong> We are working on a streamlined process for miners to claim
          their rewards directly from the website. This will simplify the reward distribution process and ensure timely
          payouts.
        </li>
        <li>
          <strong>ORE boost:</strong> An upcoming feature will provide an ORE boost, enhancing the mining rewards with a
          multiplier. This will encourage more participation and reward active contributors.
        </li>
      </ul>
    </div>
  )
}