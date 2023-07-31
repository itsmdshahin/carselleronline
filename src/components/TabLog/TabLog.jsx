import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap';

const TabLog = () => {
    return (
        <div>TabLog

            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="home" title="Home">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab">
                    Tab content for Loooonger Tab
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>

        </div>
    )
}

export default TabLog