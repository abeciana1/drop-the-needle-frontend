import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
    ChevronUpIcon,
} from "@heroicons/react/outline";
import cx from 'classnames'


interface AccordionI {
    icon: React.ElementType;
    heading: string;
    bodyText: string;
    size: string;
}

export const Accordion = ({
    icon,
    heading,
    bodyText,
    size
}: AccordionI) => {

    const Icon = icon as React.ElementType

    return (
        <div className="flex w-96 flex-col space-y-2">
    <Disclosure>
        {({ open }) => (
        <>
            <Disclosure.Button className={cx("relative flex w-full items-center justify-between rounded-lg border border-2 border-coolGray bg-layer-2 px-4 py-2 font-semibold text-heading hover:bg-muted-1 focus:z-10 focus:outline-none focus:ring-2 focus:ring-heading/80 dark:border-0 dark:bg-layer-3", {
                ['text-sm']: size === 'sm',
                ['text-base']: size === 'md',
                ['text-lg']: size === 'lg'
            })}>
            <div className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                { heading }
            </div>
            <ChevronUpIcon
                className={`${
                open ? "rotate-180 text-heading" : "text-text"
                } h-5 w-5`}
            />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-2">
            { bodyText }
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>
        </div>
    )
}


interface AccordionDataI {
    icon: React.ElementType;
    heading: string;
    dataSource: any;
    size: string;
    property: string;
}

export const AccordionDataList = ({
    icon,
    heading,
    dataSource,
    size,
    property
}: AccordionDataI) => {

    const Icon = icon as React.ElementType

    return (
        <div className="flex w-64 sm:w-80 lg:w-96 flex-col space-y-2 mx-auto">
    <Disclosure>
        {({ open }) => (
        <>
            <Disclosure.Button className={cx("relative flex w-full items-center justify-between rounded-lg border border-2 border-coolGray bg-layer-2 px-4 py-2 font-semibold text-heading hover:bg-muted-1 focus:outline-none dark:border-0 dark:bg-layer-3", {
                ['text-sm']: size === 'sm',
                ['text-base']: size === 'md',
                ['text-lg']: size === 'lg'
            })}>
            <div className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                <div className="font-medium">{ heading }</div>
            </div>
            <ChevronUpIcon
                strokeWidth="2.5"
                className={`${
                open ? "rotate-180 text-heading" : "text-text"
                } h-5 w-5 text-coolGray`}
            />
            </Disclosure.Button>
            <Disclosure.Panel className="relative">
                <ul
                    className="px-2 py-2 h-28 overscroll-auto overflow-auto z-50 absolute rounded-md bg-white w-full"
                >
                    { dataSource.map((dataEntity: any) => {
                        return <li className="text-lg">{ dataEntity[property] }</li>
                    })}
                </ul>
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>
        </div>
    )
}