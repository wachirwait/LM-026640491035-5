import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Appmanu from "./template/manu";

export default function MyHerbForm() {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        details: '',
        benefits: '',
        usage: '',
        manufacturer: '',
        herbType: '',
        contactManufacturer: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('', formData);
    };

    return (
        <div>
            <Appmanu />
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg ">
                <h1 className="text-2xl font-bold mb-6">เพิ่มข้อมูลสมุนไพร</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-2 font-semibold">ชื่อยาสมุนไพร:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="image" className="mb-2 font-semibold">ภาพตัวอย่าง:</label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="details" className="mb-2 font-semibold">รายละเอียด:</label>
                            <textarea
                                id="details"
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="benefits" className="mb-2 font-semibold">สรรพคุณ:</label>
                            <textarea
                                id="benefits"
                                name="benefits"
                                value={formData.benefits}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">การนำไปใช้:</label>
                            <div className="flex flex-col">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="usage"
                                        value="ยาใช้ภายใน"
                                        checked={formData.usage.includes("ยาใช้ภายใน")}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    ยาใช้ภายใน
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="usage"
                                        value="ยาใช้ภายนอก"
                                        checked={formData.usage.includes("ยาใช้ภายนอก")}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    ยาใช้ภายนอก
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="usage"
                                        value="ยาใช้ทั้งภายในภายนอก"
                                        checked={formData.usage.includes("ยาใช้ทั้งภายในภายนอก")}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    ยาใช้ทั้งภายในภายนอก
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="manufacturer" className="mb-2 font-semibold">ผู้ผลิต:</label>
                            <input
                                type="text"
                                id="manufacturer"
                                name="manufacturer"
                                value={formData.manufacturer}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="herbType" className="mb-2 font-semibold">ประเภทสมุนไพร:</label>
                            <input
                                type="text"
                                id="herbType"
                                name="herbType"
                                value={formData.herbType}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="contactManufacturer" className="mb-2 font-semibold">ติดต่อผู้ผลิต:</label>
                            <input
                                type="text"
                                id="contactManufacturer"
                                name="contactManufacturer"
                                value={formData.contactManufacturer}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">ส่งข้อมูล</button>
                    </div>
                </form>
            </div>
        </div>
    );
}