import React from 'react';

class About extends React.Component {
	constructor() {
		super();
		this.state = {
			skills: [
				{
					id: 'JavaScript_skill',
					content: 'JavaScript',
					percentage: '90%',
					value: '90',
				},
				{
					id: 'VueJS_skill',
					content: 'VueJS',
					percentage: '90%',
					value: '90',
				},
				{
					id: 'ReactJS_skill',
					content: 'ReactJS',
					percentage: '80%',
					value: '80',
				},
				{
					id: 'NodeJS_skill',
					content: 'NodeJS',
					percentage: '80%',
					value: '80',
				},
				{ id: 'HTML_skill', content: 'HTML', percentage: '90%', value: '90' },
				{ id: 'CSS_skill', content: 'CSS', percentage: '80%', value: '80' },
				{
					id: 'AWS_skill',
					content: 'AWS',
					percentage: '75%',
					value: '75',
				},
				{
					id: 'MongoDB_skill',
					content: 'MongoDB',
					percentage: '75%',
					value: '75',
				},
				{
					id: 'JAVA_skill',
					content: 'JAVA',
					percentage: '80%',
					value: '80',
				},
				{
					id: 'SQL_skill',
					content: 'SQL',
					percentage: '70%',
					value: '70',
				},
			],
			about_me: [
				{
					id: 'first-p-about',
					content:
						"NIT Jaipur '21 batch passout 🎓 . Loves building websites / web-apps and has a demonstrated history of working with web technologies like ReactJS, VueJS, AWS and NodeJS 👨‍💻 . Excellent with programming and a good hold over Data Structures and Algorithms.",
				},
				{
					id: 'second-p-about',
					content:
						'A travelling enthusiast and football lover . Also been a National level chess player and part of an NGO H.O.P.E , member of TEDx MNIT Jaipur and various cultural societies of college.',
				},
			],
			work_exp: [
				{
					id: 'first',
					role: 'Software Developer - 2',
					company: 'Netomi',
					date: 'Sept 2022 - Present',
				},
				{
					id: 'first',
					role: 'Software Developer - 1',
					company: 'Netomi',
					date: 'Aug 2021 - Sept 2022',
				},
				{
					id: 'second',
					role: 'Software Developer (Internship)',
					company: 'Netomi',
					date: 'Apr 2021 - Aug 2021',
				},
				{
					id: 'third',
					role: 'Full Stack Developer (Internship)',
					company: 'Classplus',
					date: 'Mar 2021 - Apr 2021',
				},
				{
					id: 'fourth',
					role: 'Web Developer (Internship)',
					company: 'Reflective AI',
					date: 'Sept 2020 - Dec 2020',
				},
			],
		};
	}

	render() {
		return (
			<section id="about" className="about-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="box-shadow-full">
								<div className="row">
									<div className="col-md-6">
										<div className="row">
											<div
												className="col-sm-6 col-md-5"
												style={{ margin: '0 auto' }}
											>
												<div
													className="about-img"
													style={{ textAlign: 'center' }}
												>
													<img
														className="img-fluid rounded b-shadow-a"
														alt=""
													/>
												</div>
											</div>
										</div>
										<div className="skill-mf">
											{/* <p className="title-s">Skill</p> */}
											{this.state.skills.map((skill) => {
												return (
													<React.Fragment key={skill.id}>
														<span>{skill.content}</span>{' '}
														<span className="pull-right">
															{skill.percentage}
														</span>
														<div className="progress">
															<div
																className="progress-bar"
																role="progressbar"
																style={{ width: skill.percentage }}
																aria-valuenow={skill.value}
																aria-valuemin="0"
																aria-valuemax="100"
															></div>
														</div>
													</React.Fragment>
												);
											})}
										</div>
									</div>
									<div className="col-md-6">
										<div className="about-me pt-4 pt-md-0">
											<div className="title-box-2">
												<h5 className="title-left">About Me</h5>
											</div>
											{this.state.about_me.map((content) => {
												return (
													<p className="lead" key={content.id}>
														{content.content}
													</p>
												);
											})}
										</div>
										<div className="about-me pt-4 pt-md-0">
											<div className="title-box-2">
												<h5 className="title-left">Work Experience</h5>
											</div>
											{this.state.work_exp.map((content) => {
												return (
													<div className="lead" key={content.id}>
														<h5 style={{ margin: '0px' }}>{content.role}</h5>
														<span style={{ fontSize: '16px' }}>
															{content.date}
														</span>
														<h6>{content.company}</h6>

														<br />
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
