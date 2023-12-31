import clsx from "clsx";
import { observer } from "mobx-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useMst } from "../../store-models";
import Tooltip from "../../shared/Tooltip";
import ComposeBtn from "./ComposeBtn";
import SidebarItem from "./SidebarItem";

function Sidebar() {
	const [isMouseIn, setIsMouseIn] = useState(false);
	const { isCollapsed, setIsCollapsed, toggleIsCollapsed } = useMst().sidebar;
	const { addComposeEmail } = useMst().composeEmailList;
	let delayTimer = useRef<number | null>(null);

	const handleIsMouseIn = () => {
		if (!isCollapsed) return;

		delayTimer.current = setTimeout(() => {
			setIsMouseIn(true);
		}, 450);
	};

	const handleMouseOut = () => {
		setIsMouseIn(false);
		if (delayTimer.current) {
			clearTimeout(delayTimer.current);
		}
	};

	useEffect(() => {
		if (!isCollapsed) return;

		setIsCollapsed(false);

		return () => {
			toggleIsCollapsed();
		};
	}, [isMouseIn]);

	const composeNewEmail = () => {
		addComposeEmail({
			index: 0,
			recipients: "",
			subject: "",
			content: "",
		});
	};

	return (
		<div
			onMouseEnter={handleIsMouseIn}
			onMouseLeave={handleMouseOut}
			className={clsx(
				`flex-row transition-all duration-300 space-y-4 pr-2`,
				isCollapsed ? "w-18" : "w-64"
			)}
		>
			<div className="flex px-2 mt-4 h-14">
				<Tooltip text="Compose an email">
					<ComposeBtn onClick={composeNewEmail} />
				</Tooltip>
			</div>

			<div className="flex-column">
				<SidebarItem text="Inbox" active={true}>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V20C22 21.1046 21.1046 22 20 22H8.1477C8.09893 22.0036 8.04968 22.0054 8 22.0054H4C2.89543 22.0054 2 21.1099 2 20.0054V5ZM5 4H19C19.5523 4 20 4.44771 20 5V14H16C14.8954 14 14 14.8954 14 16V17H10V16.0054C10 14.9008 9.10457 14.0054 8 14.0054H4V5C4 4.44772 4.44771 4 5 4Z"
							fill="currentColor"
						/>
					</svg>
				</SidebarItem>

				<SidebarItem text="Starred" active={false}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
				</SidebarItem>

				<SidebarItem text="Snoozed" active={false}>
					<svg
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
							clipRule="evenodd"
						></path>
					</svg>
				</SidebarItem>

				<SidebarItem text="Sent" active={false}>
					<svg
						style={{ transform: "rotate(90deg)" }}
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
					</svg>
				</SidebarItem>
			</div>
		</div>
	);
}

export default observer(Sidebar);
