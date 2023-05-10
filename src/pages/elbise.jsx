import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import NextLink from "next/link";

export default function elbise() {
  return (
    <Tabs>
    <TabList>
      <Tab as={NextLink} href="/elbise">One</Tab>
      <Tab as={NextLink} href="/gozluk">Two</Tab>
      <Tab as={NextLink} href="/sweatshirt">Three</Tab>
    </TabList>
  
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}
