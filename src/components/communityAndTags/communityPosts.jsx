import { AiFillCode, AiFillEye } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { MdDriveFolderUpload } from "react-icons/md";
import { RiFolderDownloadFill } from "react-icons/ri";
import { BiSolidCommentDetail } from "react-icons/bi";

export const duplicateData = [
    {
      id: 1,
      name: "Rahul Singh",
      time: "2 hours ago",
      likes: 125,
      comments: 100,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci assumenda illum aut incidunt quibusdam, ab facere obcaecati dolor quis iusto saepe dolorem temporibus, sunt tempora, ut voluptatum ducimus consequatur minima. Aliquid sequi suscipit reiciendis omnis? Molestias amet natus quidem ab ipsum aliquam ducimus voluptas, nesciunt nulla vero explicabo omnis maiores rerum laborum cum fugiat optio itaque quasi earum. Saepe, soluta?",
      strategyType: "Preparation",
    },
    {
      id: 2,
      name: "John Doe",
      time: "1 hour ago",
      likes: 150,
      comments: 120,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci assumenda illum aut incidunt quibusdam, ab facere obcaecati dolor quis iusto saepe dolorem temporibus, sunt tempora, ut voluptatum ducimus consequatur minima. Aliquid sequi suscipit reiciendis omnis? Molestias amet natus quidem ab ipsum aliquam ducimus voluptas, nesciunt nulla vero explicabo omnis maiores rerum laborum cum fugiat optio itaque quasi earum. Saepe, soluta?",
      strategyType: "Strategy",
    },
    {
      id: 3,
      name: "Jane Smith",
      time: "3 hours ago",
      likes: 100,
      comments: 80,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci assumenda illum aut incidunt quibusdam, ab facere obcaecati dolor quis iusto saepe dolorem temporibus, sunt tempora, ut voluptatum ducimus consequatur minima. Aliquid sequi suscipit reiciendis omnis? Molestias amet natus quidem ab ipsum aliquam ducimus voluptas, nesciunt nulla vero explicabo omnis maiores rerum laborum cum fugiat optio itaque quasi earum. Saepe, soluta?",
      strategyType: "Preparation",
    },
  ];
  
  export function CommunityPost  ()  {
    return (
      <div className="container mx-auto  ">
        {duplicateData.map((item) => (
          <div
            key={item.id}
            className="border-2 mb-2  border-blue-300 rounded-lg p-4 shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mr-4">
                {item.name.charAt(0)}
              </div>
              <div>
                <h2 className="font-bold text-gray-900">{item.name}</h2>
                <p className="text-gray-500 text-sm">{item.time}</p>
              </div>
              <div className="ml-auto text-gray-500">
                <span className="flex items-center">
                  <AiFillEye className="h-4 w-4 mr-1" />
                 <label className="text-black"> {item.likes}</label>
                </span>
              </div>
            </div>
            <div className="mb-4 ">
              <h3 className="text-blue-600 font-semibold flex items-center">
              <GoDotFill /><span className="text-black">  {item.strategyType} Strategy</span>
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
         
            <div className="flex items-center text-gray-500 mb-2 gap-2 flex-wrap">
          <div className="flex items-center">
         
          <MdDriveFolderUpload className="text-blue-600" />
          {item.comments}
          </div>
          <div className="flex items-center">
          <RiFolderDownloadFill  className="text-blue-600" />
            13
          </div>
          <div className="flex items-center">
          <BiSolidCommentDetail className="text-blue-600" />
            25
          </div>
          <span className="text-orange-500 ml-4 ">New comment 5 min ago</span>
          <div className="flex space-x-2 float-right  sm:ml-auto ">
          <span className="px-2 py-1 bg-orange-100 text-orange-600 border  border-orange-600 rounded-full">Strategy</span>
          <span className="px-2 py-1 bg-orange-100 text-orange-600 border border-orange-600  rounded-full">Preparation</span>
        </div>
        </div>
      
      </div>
    
        ))}
      </div>
    );
  };
  export default CommunityPost;