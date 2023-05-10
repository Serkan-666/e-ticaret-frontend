import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import Layout from "@/components/Layout";
import Layout2 from "@/components/Layout2";

export default function gozluk() {
  return (
    <Layout2>
      <Tabs>
        <TabList>
          <Tab as={NextLink} href="/elbise">
            One
          </Tab>
          <Tab as={NextLink} href="/gozluk">
            Two
          </Tab>
          <Tab as={NextLink} href="/sweatshirt">
            Three
          </Tab>
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
    </Layout2>
  );
}
