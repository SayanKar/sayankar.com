import { Menu, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import React, { Fragment, useEffect, useState } from 'react'
import { RiMenuFill } from 'react-icons/ri'

import navItems from '@/data/navItems'

import Link from '../Link'

const DropdownMenu = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        {/* @ts-expect-error */}
        <Menu.Button className='ml-4 cursor-pointer rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-800'>
          {isMounted && (
            <motion.span
              className='flex h-8 w-8 items-center justify-center text-xl'
              whileTap={{ scale: 0.5 }}
              transition={{ duration: 0.1, ease: 'easeIn' }}
              aria-label='Toggle Menu'
            >
              <RiMenuFill />
            </motion.span>
          )}
        </Menu.Button>
      </div>

      {/* @ts-expect-error */}
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        {/* @ts-expect-error */}
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-gray-800 ring-opacity-5 focus:outline-none dark:bg-gray-900'>
          <div className='py-1'>
            {navItems.map(({ href, label, icon: Icon }) => (
              // @ts-expect-error
              <Menu.Item key={label} as={Link} href={href}>
                {({ active }) => (
                  <React.Fragment>
                    {/* <Link href={href}> */}
                    <div
                      className={`
                      ${
                        active
                          ? 'bg-gray-200 dark:bg-gray-800'
                          : 'bg-white hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800'
                      } text-base px-4 py-2 text-sm`}
                    >
                      <div className='flex flex-row items-center'>
                        <Icon className='mr-2' />
                        {label}
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownMenu