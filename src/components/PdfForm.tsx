import React, { FunctionComponent } from 'react'
import CustomText from './CustomText'
import { arr, Constants, OtherCapitals, OtherRental, RentalExpensesProps, SingleFamily } from './constant'

const PdfForm: FunctionComponent = () => {
    const { entityname, formId, formNo, partner, statement } = Constants || {}
    const { statementN, title } = OtherCapitals || {}


    const CommonRentalExpenses:FunctionComponent<RentalExpensesProps> = ({ data }) => {
        const { singleF, location, property, assosiateA, assosiate, rental, rentalA } = data || {}
        return (
            <>
                <div className='dash-border flex justify-between mt-12'>
                    <CustomText className=''>{'-'}</CustomText>
                    <CustomText className='pt-[3px] pb-[4px] t'>{title}</CustomText>
                    <CustomText className='pt-[3px]'>{statementN}</CustomText>
                </div>

                <CustomText className='pt-[3px] text-center'>{singleF}</CustomText>
                <CustomText className=''>Property : {property}</CustomText>
                <CustomText className=''>Location : {location}</CustomText>

                <div className='flex justify-between mt-2'>
                    <CustomText className='border-b-2 border-black'>Description</CustomText>
                    <CustomText className='border-b-2 border-black'>Amount</CustomText>
                </div>

                <div className='flex justify-between mt-2'>
                    <CustomText>{assosiate}</CustomText>
                    <CustomText className='border-b-2 border-black'>{assosiateA}</CustomText>
                </div>

                <div className='flex justify-between mt-2'>
                    <CustomText>{rental}</CustomText>
                    <CustomText className='border-b-2 border-black'>{rentalA}</CustomText>
                </div>
            </>
        )
    }

    return (
        <div className="flex flex-col pt-[2rem] pb-[7rem] pr-[7rem] pl-[7rem] bg-[#fdfff3]">
            <div className='flex justify-between mb-[15px]'>
                <CustomText className='pt-[7px]'>{entityname}</CustomText>
                <CustomText className='pt-[7px]'>{formId}</CustomText>
            </div>

            <div className='dash-border flex justify-between pb-[8px]'>
                <CustomText className='pt-[3px]'>{formNo}</CustomText>
                <CustomText className='pt-[3px]'>{partner}</CustomText>
                <CustomText className='pt-[3px]'>{statement}</CustomText>
            </div>


            <div className='flex justify-between mt-[18px]'>
                {
                    (arr || []).map((val, key) => {
                        return (
                            <div key={key} >
                                <div className='text-space'>
                                    <CustomText >{val.name}</CustomText>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <CustomText className='pb-[7px] pt-[7px]'>{val.col1}</CustomText>
                                    <CustomText className='pb-[7px] pt-[7px]'>{val.col2}</CustomText>
                                    <CustomText className='single-dash-border pb-[7px] pt-[7px] mt-[20px] text-end'>{val.total}</CustomText>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <CommonRentalExpenses data={SingleFamily} />
            <CommonRentalExpenses data={OtherRental} />
        </div>
    )
}

export default PdfForm