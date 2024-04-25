import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav
    class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-3">

      <div
        class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentY"
        data-te-collapse-item>
        <ul
          class="mr-auto flex flex-col lg:flex-row"
          data-te-navbar-nav-ref>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <Link
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              to={'/'}
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Home</Link>
          </li>
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <Link
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              to={'/signin'}
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Login</Link>
          </li>
                  </ul>
      </div>
    </div>
  </nav>
  )
}
