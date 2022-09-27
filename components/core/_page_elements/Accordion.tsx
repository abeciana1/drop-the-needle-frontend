import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronUpIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/outline";

// icon
// heading
// body
// size 
    // sm - text-sm
    // md - text-base
    // lg - text-lg

const Accordion = () => {
    return (
        <div className="flex w-96 flex-col space-y-2">
    <Disclosure>
        {({ open }) => (
        <>
            <Disclosure.Button className="relative flex w-full items-center justify-between rounded-lg border border-muted-1 bg-layer-2 px-4 py-2 text-base font-semibold text-heading hover:bg-muted-1 focus:z-10 focus:outline-none focus:ring-2 focus:ring-heading/80 dark:border-0 dark:bg-layer-3">
            <div className="flex items-center gap-2">
                <ReceiptRefundIcon className="h-5 w-5" />
                What is your refund policy?
            </div>
            <ChevronUpIcon
                className={`${
                open ? "rotate-180 text-heading" : "text-text"
                } h-5 w-5`}
            />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-2">
            If you&apos;re unhappy with your purchase for any reason, email us
            within 90 days and we'll refund you in full, no questions asked.
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>
        </div>
    )
}

export default Accordion