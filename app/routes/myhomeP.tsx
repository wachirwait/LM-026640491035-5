import Appmanu from "./template/manu";

export default function Myprofile() {
    return (
        <div>
            <Appmanu />
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
                <center>
                    <p className="text-2xl font-bold mb-6 ">ชื่อ-สกุล: นายวชิรวิทย์ โชติช่วง</p>
                    <p className="text-2xl font-bold mb-6">รหัสนักศึกษา: 026640491035-5</p>
                    <p className="text-2xl font-bold mb-6">อีเมล: wachirawit.cho@rmutto.ac.th</p>
                    <p className="text-2xl font-bold mb-6">Facebook: Wachirawit Chotchuang</p>
                    <p className="text-2xl font-bold mb-6">โทร: 064-323-8656</p>
                </center>
            </div>
        </div>
    );
}