'use client';

import React, { useState } from 'react';
import { Dialog, DialogPanel} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-current">
      <nav
        className="mx-auto max-w-7xl p-6 lg:px-8 flex items-center justify-center bg-transparent"
        aria-label="Global"
      >
        <div className="hidden lg:flex justify-center w-full space-x-10">
          <a href="#about" className="text-lg font-bold text-white hover:text-gray-600">
            About
          </a>
          <a href="#projects" className="text-lg font-bold text-white hover:text-gray-600">
            Projects
          </a>
          <a href="#skills" className="text-lg font-bold text-white hover:text-gray-600">
            Skills
          </a>
          <a href="#contact" className="text-lg font-bold text-white hover:text-gray-600">
            Contact
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black bg-opacity-30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full max-w-xs bg-black p-6">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <div className="mt-6 space-y-6">
            <a href="#" className="block text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-lg p-2">
              About
            </a>
            <a href="#" className="block text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-lg p-2">
              Projects
            </a>
            <a href="#" className="block text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-lg p-2">
              Contact
            </a>
          </div>
        </DialogPanel>
      </Dialog>

    </header>
  );
}



