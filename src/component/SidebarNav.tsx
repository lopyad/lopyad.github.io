import {ContentType} from "@/types/Sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faFolder, faSearch} from "@fortawesome/free-solid-svg-icons";
import {usePathname} from "next/navigation";

interface SidebarNavProps {
    onClick: (contentType: ContentType, pathname: string) => void;
}

export default function SidebarNav({ onClick }: SidebarNavProps) {
    const pathname = usePathname();

    return (
        <aside className="sidebar-1st">
            <div className="sidebar-1st-content">
                <button onClick={()=>onClick(ContentType.FILE_EXPLORER, pathname)}>
                    <FontAwesomeIcon icon={faFolder} />
                </button>
                <button onClick={()=>onClick(ContentType.SEARCH, pathname)}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <button onClick={()=>onClick(ContentType.SETTING, pathname)}>
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
        </aside>
    );
}