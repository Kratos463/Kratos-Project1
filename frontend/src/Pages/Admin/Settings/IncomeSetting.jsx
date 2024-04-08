import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, FormControl, FormLabel, Input, Flex, Text } from '@chakra-ui/react'
import BoxLayout from '../../../Components/Layout/BoxLayout'

const IncomeSetting = () => {
  return (
    <BoxLayout>
      <Tabs isFitted >
        <TabList>
          <Tab>Binary Income</Tab>
          <Tab>Sponser Bonus</Tab>
          <Tab>Repurchase Level</Tab>
          <Tab>Residual Income </Tab>
          <Tab>Fast Start Bonus</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <BinaryIncome />
          </TabPanel>
          <TabPanel>
            <SponserBonus />
          </TabPanel>
          <TabPanel>
            <RepurchaseLevel />
          </TabPanel>
          <TabPanel>
            <ResidualIncome />
          </TabPanel>
          <TabPanel>
            <FastStartBouns />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </BoxLayout>
  )
}

export default IncomeSetting

const BinaryIncome = () => {
  return (
    <>
      <form>
        <FormControl>
          <FormLabel>Pair Commission Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <Button mt={5} bgColor="blue" color="whitesmoke" size="md" type="submit">Submit</Button>
      </form>
    </>
  )
}

const SponserBonus = () => {
  return (
    <form>
      <FormControl>
        <FormLabel>Sponsor Bonus Percentage</FormLabel>
        <Input type="number" placeholder='ex - 20' required />
      </FormControl>
      <Button mt={5} bgColor="blue" color="whitesmoke" size="md" type="submit">Submit</Button>
    </form>
  )
}

const RepurchaseLevel = () => {
  return (
    <form>
      <Text>Note - All Levels are Required.</Text>
      <Flex justify="space-between" mt={5}>
        <FormControl flex={1} mr={2}>
          <FormLabel>Level1 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <FormControl flex={1} >
          <FormLabel>Level2 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
      </Flex>
      <Flex justify="space-between" mt={5}>
        <FormControl flex={1} mr={2}>
          <FormLabel>Level3 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <FormControl flex={1} >
          <FormLabel>Level4 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
      </Flex>
      <Flex justify="space-between" mt={5}>
        <FormControl flex={1} mr={2}>
          <FormLabel>Level5 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <FormControl flex={1} >
          <FormLabel>Level6 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
      </Flex>
      <Flex justify="space-between" mt={5}>
        <FormControl flex={1} mr={2}>
          <FormLabel>Level7 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <FormControl flex={1} >
          <FormLabel>Level8 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
      </Flex>
      <Flex justify="space-between" mt={5}>
        <FormControl flex={1} mr={2}>
          <FormLabel>Level9 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <FormControl flex={1} >
          <FormLabel>Level10 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
      </Flex>
      <Button mt={5} bgColor="blue" color="whitesmoke" size="md" type="submit">Submit</Button>
    </form>
  )
} 

const ResidualIncome = () => {
  return (
    <form>
      <Text>Note - All Fields are Required.</Text>
      <FormControl mt={5}>
        <FormLabel>Personal Residual Income Weekly Percentage</FormLabel>
        <Input type="number" placeholder='ex - 20' required />
      </FormControl>
      <Flex justify="space-between" mt={5}>
        <FormControl flex={1} mr={2}>
          <FormLabel>Residual Level1 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <FormControl flex={1} >
          <FormLabel>Residual Level2 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
      </Flex>
      <Flex justify="space-between" mt={5}>
        <FormControl flex={1} mr={2}>
          <FormLabel>Residual Level3 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <FormControl flex={1} >
          <FormLabel>Residual Level4 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
      </Flex>
      <Flex justify="space-between" mt={5}>
        <FormControl flex={1} mr={2}>
          <FormLabel>Residual Level5 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <FormControl flex={1} >
          <FormLabel>Residual Level6 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
      </Flex>
      <Flex justify="space-between" mt={5}>
        <FormControl flex={1} mr={2}>
          <FormLabel>Residual Level7 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <FormControl flex={1} >
          <FormLabel>Residual Level8 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
      </Flex>
      <Flex justify="space-between" mt={5}>
        <FormControl flex={1} mr={2}>
          <FormLabel>Residual Level9 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
        <FormControl flex={1} >
          <FormLabel>Residual Level10 Percentage</FormLabel>
          <Input type="number" placeholder='ex - 20' required />
        </FormControl>
      </Flex>
      <Button mt={5} bgColor="blue" color="whitesmoke" size="md" type="submit">Submit</Button>
    </form>
  )
}

const FastStartBouns = () => {
  return (
    <form>
      <FormControl>
        <FormLabel>Number of Person Required</FormLabel>
        <Input type="number" placeholder='ex - 20' required />
      </FormControl>
      <FormControl>
        <FormLabel>Number of Days</FormLabel>
        <Input type="number" placeholder='ex - 20' required />
      </FormControl>
      <Button mt={5} bgColor="blue" color="whitesmoke" size="md" type="submit">Submit</Button>
    </form>
  )
}