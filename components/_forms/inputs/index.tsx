import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

interface TextInputI {
    name: string;
    labelText: string;
    type: string;
    value: string;
    fieldRequired?: boolean;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void|undefined;
}

export const TextInput = ({
    name,
    labelText,
    type,
    value,
    fieldRequired,
    placeholder,
    onChange
}: TextInputI) => {
    return (
        <div
            className="py-3"
        >
            <label className="sr-only">{ labelText }</label>
            <input
                className="py-1 pl-4 ring-2 ring-slate-200 rounded-lg focus:ring-royalBlue text-xl w-full"
                placeholder={placeholder}
                name={name}
                type={type}
                value={value}
                required={fieldRequired}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}

interface SingleSelectFieldI {
    labelText: string;
    dataSource: any;
    property: string;
    selectedValue: any;
    setSelectedValue: (value: any) => void;
    updateFunc?: (value: any) => void;
}

export const SingleSelectField = ({
    labelText,
    dataSource,
    property,
    selectedValue,
    setSelectedValue
}: SingleSelectFieldI) => {

    return (
        <div className="w-96">
        <label className="sr-only">{ labelText }</label>
        <Listbox value={selectedValue} onChange={setSelectedValue}>
            <div className="relative mt-1">
            <Listbox.Button className="border border-2 border-coolGray relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate text-base">{selectedValue[property]}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                    className="h-5 w-5 text-coolGray"
                    aria-hidden="true"
                    strokeWidth="2"
                />
                </span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {dataSource.map((data: any, dataIdx: number) => (
                    <Listbox.Option
                    key={dataIdx}
                    className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                    }
                    value={data}
                    >
                    {({ selected }) => (
                        <>
                        <span
                            className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                            {data[property]}
                        </span>
                        {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                        ) : null}
                        </>
                    )}
                    </Listbox.Option>
                ))}
                </Listbox.Options>
            </Transition>
            </div>
        </Listbox>
        </div>
    )
}

export const SongSelectField = ({
    labelText,
    dataSource,
    property,
    selectedValue,
    setSelectedValue
}: SingleSelectFieldI) => {

    return (
        <div className="w-72">
        <label className="sr-only">{ labelText }</label>
        <Listbox value={selectedValue} onChange={setSelectedValue}>
            <div className="relative mt-1">
            <Listbox.Button className="border border-2 border-coolGray relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate text-base">{`${selectedValue.order_number} — ${selectedValue[property]}`}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
                </span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {dataSource.map((data: any, dataIdx: number) => (
                    <Listbox.Option
                    key={dataIdx}
                    className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                    }
                    value={data}
                    >
                    {({ selected }) => (
                        <>
                        <span
                            className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                            {`${data.order_number} — ${data[property]}`}
                        </span>
                        {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                        ) : null}
                        </>
                    )}
                    </Listbox.Option>
                ))}
                </Listbox.Options>
            </Transition>
            </div>
        </Listbox>
        </div>
    )
}